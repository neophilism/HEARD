import { mkdtempSync, cpSync, chownSync, rmSync, mkdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync, execFileSync } from 'node:child_process';
import pg from 'pg';

export async function startPostgres() {
  if (process.env.HEARD_DATABASE_ENGINE === 'pglite') {
    const { PGlite } = await import('@electric-sql/pglite');
    const instances = [];
    const make = () => {
      const db = new PGlite();
      instances.push(db);
      return { query: async (sql, params) => params ? db.query(sql, params) : (await db.exec(sql)).at(-1), end: async () => {} };
    };
    return { admin: make(), database: async () => make(), stop: async () => { for (const db of instances) await db.close(); } };
  }
  if (process.getuid() === 0) {
    const mapping = readFileSync('/proc/self/uid_map', 'utf8').trim().split(/\s+/).map(Number);
    if (mapping.length === 3 && mapping[2] === 1) throw new Error('NATIVE_POSTGRES_UID_UNAVAILABLE: only UID 0 is mapped; PostgreSQL non-root startup cannot run. Use the explicit WASM test command for SQL semantics, and retain native CI as required.');
  }
  if (process.platform !== 'linux' || process.arch !== 'x64') throw new Error('This runner currently requires the pinned Linux x64 PostgreSQL fixture; do not skip required database tests.');
  const root = mkdtempSync(join(tmpdir(), 'heard-postgres-'));
  // Restore only package-owned library symlinks. Never create system users.
  const { hydrateSymlinks } = await import('../../node_modules/@embedded-postgres/linux-x64/scripts/hydrate-symlinks.js');
  await hydrateSymlinks();
  cpSync(resolve('node_modules/@embedded-postgres/linux-x64/native'), join(root, 'native'), { recursive: true, verbatimSymlinks: true });
  const socket = join(root, 'socket'); mkdirSync(socket, { mode: 0o700 });
  let identity = {};
  if (process.getuid() === 0) {
    const uid = Number(execFileSync('id', ['-u', 'nobody'], { encoding: 'utf8' }).trim());
    const gid = Number(execFileSync('id', ['-g', 'nobody'], { encoding: 'utf8' }).trim());
    chownSync(root, uid, gid); chownSync(socket, uid, gid); identity = { uid, gid };
  }
  const bin = name => join(root, 'native/bin', name);
  const data = join(root, 'data');
  function run(name, args) {
    const r = spawnSync(bin(name), args, { ...identity, encoding: 'utf8', timeout: 30000 });
    if (r.error || r.status !== 0) throw new Error(`${name} failed: ${r.error?.message || r.stderr}`);
    return r.stdout;
  }
  let started = false;
  try {
    run('initdb', ['-D', data, '-A', 'trust', '-U', 'heard_test_admin', '--no-locale', '--encoding=UTF8']);
    run('pg_ctl', ['-D', data, '-l', join(root, 'server.log'), '-w', 'start', '-o', `-F -k ${socket} -h '' -p 5432`]);
    started = true;
    const config = { host: socket, port: 5432, user: 'heard_test_admin', database: 'postgres' };
    const admin = new pg.Client(config); await admin.connect();
    return {
      admin,
      async database(name) {
        if (!/^heard_test_[a-z]+$/.test(name)) throw new Error('Unsafe fixture database name');
        await admin.query(`CREATE DATABASE ${name}`);
        const client = new pg.Client({ ...config, database: name }); await client.connect(); return client;
      },
      async connect(name) {
        if (!/^heard_test_[a-z]+$/.test(name)) throw new Error('Unsafe fixture database name');
        const client=new pg.Client({...config,database:name});await client.connect();return client;
      },
      async stop() { await admin.end(); try { run('pg_ctl', ['-D', data, '-m', 'fast', '-w', 'stop']); } finally { rmSync(root, { recursive: true, force: true }); } },
    };
  } catch (error) {
    if (started) run('pg_ctl', ['-D', data, '-m', 'immediate', '-w', 'stop']);
    rmSync(root, { recursive: true, force: true }); throw error;
  }
}
