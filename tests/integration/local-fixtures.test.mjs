import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { PGlite } from '@electric-sql/pglite';

// Development-only single-connection PostgreSQL fixture. This does not test
// network roles, production IAM, real case migrations or object-provider grants.
test('fresh local PostgreSQL fixture persists fictional records and rolls back', async () => {
  const root = await mkdtemp(join(tmpdir(), 'heard-pg-fixture-'));
  let db;
  try {
    db = new PGlite(join(root, 'pgdata'));
    await db.exec('CREATE TABLE fixture_records (id text PRIMARY KEY, title text NOT NULL);');
    await db.query('INSERT INTO fixture_records VALUES ($1, $2)', ['synthetic-guide', 'Fictional guide for testing only']);
    await db.exec('BEGIN;');
    await db.query('INSERT INTO fixture_records VALUES ($1, $2)', ['rolled-back', 'Synthetic rollback fixture']);
    await db.exec('ROLLBACK;');
    assert.equal((await db.query('SELECT count(*)::int AS count FROM fixture_records')).rows[0].count, 1);
    await db.close();
    db = new PGlite(join(root, 'pgdata'));
    assert.equal((await db.query('SELECT title FROM fixture_records WHERE id = $1', ['synthetic-guide'])).rows[0].title, 'Fictional guide for testing only');
    await assert.rejects(db.query('INSERT INTO fixture_records VALUES ($1, $2)', ['synthetic-guide', 'Duplicate']), /duplicate key/);
    // Isolated local storage fixture; never expose it as a public upload service.
    const objects = join(root, 'private-objects');
    await mkdir(objects, { mode: 0o700 });
    const bytes = Buffer.from('fictional evidence fixture; no personal data');
    const object = join(objects, 'fixture-object');
    await writeFile(object, bytes, { flag: 'wx', mode: 0o600 });
    assert.deepEqual(await readFile(object), bytes);
    await assert.rejects(writeFile(object, bytes, { flag: 'wx' }), /EEXIST/);
  } finally {
    if (db && !db.closed) await db.close();
    await rm(root, { recursive: true, force: true });
  }
});
