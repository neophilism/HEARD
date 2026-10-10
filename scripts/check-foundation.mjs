import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';

const read = (path) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
for (const file of ['README.md', 'docs/DEVELOPMENT_PLAN.md', 'docs/CROSS_ACCOUNT_HANDOFF.md', 'docs/DECISIONS.md', '.env.example']) {
  assert.ok(existsSync(new URL('../' + file, import.meta.url)), 'Missing foundational file: ' + file);
}
const plan = read('docs/DEVELOPMENT_PLAN.md');
assert.match(plan, /HEARD/);
assert.match(plan, /Understand my rights/);
assert.match(plan, /Get help privately/);
assert.match(plan, /HEARD-48/);
assert.match(read('README.md'), /not deployed/i);
console.log('HEARD foundational documentation checks passed');
