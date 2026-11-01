import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const lockId = 723104;
const activeClients = new WeakSet();
export async function migrate(client, directory, options = {}) {
  if (activeClients.has(client)) throw new Error('A migration already uses this client; use dedicated connections.');
  activeClients.add(client);
  try { return await migrateLocked(client, directory, options); }
  finally { activeClients.delete(client); }
}
async function migrateLocked(client, directory, { targetVersion = Infinity } = {}) {
  if (targetVersion !== Infinity && (!Number.isInteger(targetVersion) || targetVersion < 1)) throw new Error('Invalid target migration version');
  if (directory instanceof URL) directory = fileURLToPath(directory);
  const names = (await readdir(directory)).filter(name => /^\d{4}_[a-z0-9_]+\.sql$/.test(name)).sort();
  const migrations = await Promise.all(names.map(async name => {
    const sql = await readFile(join(directory, name), 'utf8');
    const body = sql.match(/^\s*(?:--[^\n]*\n\s*)*BEGIN;\s*([\s\S]*?)\s*COMMIT;\s*$/);
    if (body && /^\s*(BEGIN|COMMIT|ROLLBACK|START\s+TRANSACTION)\s*;/im.test(body[1])) throw new Error(`Migration ${name} cannot control the runner transaction`);
    if (!body) throw new Error(`Migration ${name} must have one outer BEGIN/COMMIT boundary`);
    return { name, version: Number(name.slice(0, 4)), sql: body[1], checksum: createHash('sha256').update(sql).digest('hex') };
  }));
  if (!migrations.length || migrations.some((m, i) => m.version !== i + 1)) throw new Error('Migration versions must be contiguous from 1');
  await client.query('SELECT pg_advisory_lock($1)', [lockId]);
  try {
    await client.query(`CREATE TABLE IF NOT EXISTS heard_schema_migrations (version integer PRIMARY KEY CHECK(version>0), applied_at timestamptz NOT NULL DEFAULT now());
      CREATE TABLE IF NOT EXISTS heard_migration_checksums (version integer PRIMARY KEY REFERENCES heard_schema_migrations(version), checksum_sha256 text NOT NULL CHECK(checksum_sha256 ~ '^[a-f0-9]{64}$'));
      REVOKE ALL ON heard_schema_migrations, heard_migration_checksums FROM PUBLIC;`);
    const applied = (await client.query('SELECT m.version, c.checksum_sha256 FROM heard_schema_migrations m LEFT JOIN heard_migration_checksums c USING(version) ORDER BY version')).rows;
    for (const row of applied) {
      const migration = migrations.find(m => m.version === row.version);
      if (!migration || row.checksum_sha256 !== migration.checksum) throw new Error(`MIGRATION_HISTORY_MISMATCH at version ${row.version}; no automatic legacy adoption or checksum replacement`);
    }
    if (applied.some((row, index) => row.version !== index + 1)) throw new Error('Migration history has a gap');
    if (applied.some(row => row.version > targetVersion)) throw new Error('Automatic destructive downgrade is not supported');
    const completed = [];
    for (const migration of migrations.filter(m => m.version <= targetVersion && !applied.some(row => row.version === m.version))) {
      await client.query('BEGIN');
      try {
        await client.query(migration.sql);
        await client.query('INSERT INTO heard_schema_migrations(version) VALUES($1) ON CONFLICT DO NOTHING', [migration.version]);
        await client.query('INSERT INTO heard_migration_checksums(version, checksum_sha256) VALUES($1,$2)', [migration.version, migration.checksum]);
        await client.query('COMMIT');
        completed.push(migration.version);
      } catch (error) { await client.query('ROLLBACK'); throw error; }
    }
    return completed;
  } finally { await client.query('SELECT pg_advisory_unlock($1)', [lockId]); }
}
