import pg from 'pg';
import { migrate } from '../packages/database/migrate.mjs';
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required; never use a production connection for fixture tests.');
const client = new pg.Client({ connectionString: process.env.DATABASE_URL });
await client.connect();
try { console.log(JSON.stringify({ applied: await migrate(client, new URL('../db/migrations', import.meta.url)) })); }
finally { await client.end(); }
