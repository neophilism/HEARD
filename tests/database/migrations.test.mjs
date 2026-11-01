import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, cp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { migrate } from '../../packages/database/migrate.mjs';
import { startPostgres } from './postgres-fixture.mjs';
const directory = resolve('db/migrations');
const sql = name => readFile(name, 'utf8');

test('migrations and security invariants on the explicitly selected PostgreSQL engine', async t => {
  const server = await startPostgres();
  const clients = [];
  const database = async name => { const c = await server.database(name); clients.push(c); return c; };
  try {
    const version=(await server.admin.query('SELECT version() AS version')).rows[0].version;
    console.log('Observed database engine:',version);
    assert.match(version,process.env.HEARD_DATABASE_ENGINE==='pglite' ? /PostgreSQL 1[78]\./ : /PostgreSQL 17\.11/);
    const client = await database('heard_test_blank');
    await t.test('blank migration, repeated runner and canonical SQL invariants', async () => {
      assert.deepEqual(await migrate(client, directory), [1, 2, 3]);
      assert.deepEqual(await migrate(client, directory), []);
      await client.query(await sql('db/fixtures/synthetic.sql'));
      await client.query(await sql('db/fixtures/synthetic.sql'));
      await client.query(await sql('db/tests/rls-invariants.sql'));
      await client.query(await sql('db/tests/no-permissive-policies.sql'));
      assert.equal((await client.query('SELECT count(*)::int AS count FROM heard_cases')).rows[0].count, 1);
    });
    await t.test('scoped non-owner roles cannot read cases or write through FORCE RLS', async () => {
      await client.query('SET ROLE heard_api');
      try {
        assert.equal((await client.query('SELECT count(*)::int AS count FROM heard_cases')).rows[0].count, 0);
        await assert.rejects(client.query("INSERT INTO heard_subjects(account_state) VALUES('active')"), { code: '42501' });
        await assert.rejects(client.query('SELECT * FROM heard_jobs'), { code: '42501' });
      } finally { await client.query('RESET ROLE'); }
      await client.query('SET ROLE heard_job_worker');
      try { await assert.rejects(client.query('SELECT * FROM heard_private_objects'), { code: '42501' }); }
      finally { await client.query('RESET ROLE'); }
    });
    await t.test('foreign keys, publication, grant scope, jobs and audit fail closed', async () => {
      const cid = '00000000-0000-4000-8000-000000000101';
      const owner = '00000000-0000-4000-8000-000000000001';
      await assert.rejects(client.query("INSERT INTO heard_cases(subject_id,kind) VALUES('ffffffff-ffff-4fff-8fff-ffffffffffff','question')"), { code: '23503' });
      await assert.rejects(client.query("UPDATE heard_cases SET visibility='public'"), { code: '23514' });
      await assert.rejects(client.query("UPDATE heard_publications SET state='published'"), { code: '23514' });
      await client.query("INSERT INTO heard_subjects(id) VALUES('00000000-0000-4000-8000-000000000002')");
      await client.query("INSERT INTO heard_cases(id,subject_id,kind) VALUES('00000000-0000-4000-8000-000000000102','00000000-0000-4000-8000-000000000002','question')");
      await client.query("INSERT INTO heard_private_objects(id,case_id,storage_ref,checksum_sha256) VALUES('00000000-0000-4000-8000-000000000402','00000000-0000-4000-8000-000000000102','synthetic://fixture/other-case',repeat('1',64))");
      await assert.rejects(client.query("INSERT INTO heard_resource_grants(case_id,object_id,grantor_id,recipient_id,action,purpose,expires_at) VALUES($1,$2,$3,$3,'read','synthetic cross-case',now()+interval '1 hour')",[cid,'00000000-0000-4000-8000-000000000402',owner]),{code:'23503'});

      await assert.rejects(client.query('INSERT INTO heard_resource_grants(case_id,object_id,grantor_id,recipient_id,action,purpose,expires_at) VALUES($1,$2,$3,$4,\'read\',\'synthetic scope\',now()+interval \'1 hour\')', [cid,'00000000-0000-4000-8000-000000000401','00000000-0000-4000-8000-000000000002',owner]), { code: '23503' });
      await assert.rejects(client.query("INSERT INTO heard_jobs(case_id,kind,dedupe_key,state) VALUES($1,'scan','invalid-lease','leased')", [cid]), { code: '23514' });
      await client.query("INSERT INTO heard_jobs(case_id,kind,dedupe_key) VALUES($1,'scan','synthetic-job')", [cid]);
      await assert.rejects(client.query("INSERT INTO heard_jobs(case_id,kind,dedupe_key) VALUES($1,'scan','synthetic-job')", [cid]), { code: '23505' });
      await client.query("INSERT INTO heard_audit_events(case_id,action,outcome) VALUES($1,'fixture_test','deny')", [cid]);
      await assert.rejects(client.query('DELETE FROM heard_audit_events'), /append-only/);
    });
    await t.test('upgrade a prior validated fixture without losing private records', async () => {
      const prior = await database('heard_test_upgrade');
      assert.deepEqual(await migrate(prior, directory, { targetVersion: 2 }), [1,2]);
      await prior.query(await sql('db/fixtures/synthetic.sql'));
      assert.deepEqual(await migrate(prior, directory), [3]);
      assert.equal((await prior.query('SELECT quarantine_state FROM heard_private_objects')).rows[0].quarantine_state, 'quarantined');
      assert.equal((await prior.query('SELECT state FROM heard_publications')).rows[0].state, 'withdrawn');
      await assert.rejects(migrate(prior,directory,{targetVersion:2}),/downgrade/);
      await assert.rejects(migrate(prior,directory,{targetVersion:NaN}),/Invalid target/);
    });

    await t.test('unverified legacy history is rejected without adopting or changing it', async () => {
      const legacy = await database('heard_test_legacy');
      await legacy.query(await sql('db/migrations/0001_initial.sql'));
      await assert.rejects(migrate(legacy,directory),/MIGRATION_HISTORY_MISMATCH/);
      assert.equal((await legacy.query('SELECT max(version) AS version FROM heard_schema_migrations')).rows[0].version,1);
    });
    await t.test('failed migration rolls back DDL and history; checksum drift refuses changes', async () => {
      const root = await mkdtemp(join(tmpdir(), 'heard-migration-failure-'));
      try {
        await cp(directory, root, { recursive: true });
        await writeFile(join(root, '0004_failure.sql'), 'BEGIN; CREATE TABLE rollback_probe(id integer); SELECT 1/0; COMMIT;\n');
        await assert.rejects(migrate(client, root), { code: '22012' });
        assert.equal((await client.query("SELECT to_regclass('rollback_probe') AS relation")).rows[0].relation, null);
        assert.equal((await client.query('SELECT max(version) AS version FROM heard_schema_migrations')).rows[0].version, 3);
        const first = join(root, '0001_initial.sql');
        await writeFile(first, '-- Changed historical source\n' + await sql(first));
        await assert.rejects(migrate(client, root), /MIGRATION_HISTORY_MISMATCH/);
      } finally { await rm(root, { recursive: true, force: true }); }
    });
  } finally { for (const c of clients) await c.end(); await server.stop(); }
});
