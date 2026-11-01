import test from 'node:test';
import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { migrate } from '../../packages/database/migrate.mjs';
import { startPostgres } from './postgres-fixture.mjs';

test('native PostgreSQL serializes two real migration backends', async () => {
  if (process.env.HEARD_DATABASE_ENGINE) throw new Error('Native concurrency acceptance cannot use a WASM single-session engine.');
  const server = await startPostgres();
  let first, second;
  try {
    first = await server.database('heard_test_concurrency');
    second = await server.connect('heard_test_concurrency');
    const results = await Promise.all([migrate(first, resolve('db/migrations')), migrate(second, resolve('db/migrations'))]);
    assert.deepEqual(results.flat().sort(), [1, 2, 3]);
    assert.equal((await first.query('SELECT count(*)::int AS count FROM heard_migration_checksums')).rows[0].count, 3);
    assert.deepEqual(await migrate(second, resolve('db/migrations')), []);
  } finally { if (first) await first.end(); if (second) await second.end(); await server.stop(); }
});
