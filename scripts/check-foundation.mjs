import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';

const read = (path) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
for (const file of [
  'README.md',
  'docs/DEVELOPMENT_PLAN.md',
  'docs/CROSS_ACCOUNT_HANDOFF.md',
  'docs/DECISIONS.md',
  'docs/CONTENT_STRATEGY.md',
  'content/site-copy.json',
  '.env.example',
]) {
  assert.ok(existsSync(new URL('../' + file, import.meta.url)), 'Missing foundation file: ' + file);
}

const plan = read('docs/DEVELOPMENT_PLAN.md');
const copy = JSON.parse(read('content/site-copy.json'));
assert.match(plan, /HEARD-01/);
assert.match(plan, /HEARD-48/);
assert.match(plan, /content\/site-copy\.json/);
assert.equal(copy.brand.name, 'HEARD');
assert.equal(copy.home.cards.length, 6);
assert.ok(copy.home.headline.length > 10);
console.log('HEARD foundation and copy checks passed');
