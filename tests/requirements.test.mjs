import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateRequirements } from '../scripts/check-requirements.mjs';

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const ledger = JSON.parse(read('requirements/ledger.json'));
const plan = read('docs/DEVELOPMENT_PLAN.md');
const charter = read('PRODUCT_REQUIREMENTS.md');
const check = candidate => validateRequirements(candidate, plan, charter);
const changed = mutate => { const copy = structuredClone(ledger); mutate(copy); return copy; };

test('all approved build and acceptance statements have stable owned requirements', () => {
  assert.equal(check(ledger), 48);
});
test('missing and duplicate units fail closed', () => {
  assert.throws(() => check(changed(x => x.units.pop())), /missing or extra/);
  assert.throws(() => check(changed(x => x.units[47] = x.units[0])), /duplicate/);
});
test('a feature or acceptance clause cannot disappear while titles still match', () => {
  for (const field of ['build', 'acceptance', 'dependencies']) {
    assert.throws(() => check(changed(x => x.units[22][field] = 'abridged')), /drifted/);
  }
});
test('ownership, destination and source identity remain reviewable', () => {
  assert.throws(() => check(changed(x => x.units[0].owner = '')), /owner required/);
  assert.throws(() => check(changed(x => x.units[0].testDestination = '../private')), /destination/);
  assert.throws(() => check(changed(x => x.units[0].owner = 'Unassigned')), /mapping drift/);
  assert.throws(() => check(changed(x => x.source.snapshotSha = 'main')), /snapshot/);
});
test('planning validation cannot certify implementation or silently approve proposals', () => {
  assert.throws(() => check(changed(x => x.units[0].status = 'PASSED')), /cannot certify/);
  assert.throws(() => check(changed(x => x.units[0].evidence = ['CI green'])), /must not imply/);
  assert.throws(() => check(changed(x => x.units[0].decisionStatus = 'PROPOSED')), /proposals/);
});
