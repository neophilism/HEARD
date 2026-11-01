import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validatePrivacyDesign } from '../scripts/check-privacy-design.mjs';
const model = JSON.parse(readFileSync(new URL('../security/privacy-design.json', import.meta.url), 'utf8'));
function changed(mutate) { const copy = structuredClone(model); mutate(copy); return copy; }
const flow = (copy, id) => copy.flows.find(x => x.id === id);

test('privacy design enumerates flows, actors, decryption exposure and negative scenarios', () => {
  assert.equal(validatePrivacyDesign(model), 16);
});
test('private narrative cannot be mapped directly into public search/storage', () => {
  assert.throws(() => validatePrivacyDesign(changed(x => flow(x, 'F03').destination = 'public-store')), /restricted data/);
});
test('public release and replication have distinct design gates', () => {
  assert.throws(() => validatePrivacyDesign(changed(x => flow(x, 'F10').releaseGate = 'PUBLIC_APPROVAL')), /consent and review/);
  assert.throws(() => validatePrivacyDesign(changed(x => flow(x, 'F11').releaseGate = 'CONSENT_AND_REVIEW')), /separate consent/);
});
test('unknown or omitted plaintext actor is visible as incomplete design', () => {
  assert.throws(() => validatePrivacyDesign(changed(x => flow(x, 'F02').plaintextCapableActors = [])), /missing/);
  assert.throws(() => validatePrivacyDesign(changed(x => flow(x, 'F02').plaintextCapableActors.push('undocumented-vendor'))), /unknown/);
  assert.throws(() => validatePrivacyDesign(changed(x => flow(x, 'F02').keyCustody = '')), /missing/);
});
test('identity reveal and unsupported messaging cannot silently lose their gates', () => {
  assert.throws(() => validatePrivacyDesign(changed(x => flow(x, 'F06').releaseGate = 'PRIVATE_SCOPE')), /identity compartment/);
  assert.throws(() => validatePrivacyDesign(changed(x => flow(x, 'F16').releaseGate = 'RECIPIENT_GRANT')), /remains disabled/);
});
test('required negative scenarios and references cannot disappear', () => {
  assert.throws(() => validatePrivacyDesign(changed(x => x.negativeScenarios = x.negativeScenarios.filter(s => s.category !== 'false-e2ee'))), /missing negative scenario/);
  assert.throws(() => validatePrivacyDesign(changed(x => x.negativeScenarios[0].flows.push('F99'))), /unknown scenario flow/);
  assert.throws(() => validatePrivacyDesign(changed(x => x.flows.pop())), /required flow missing/);
});
test('architecture lint cannot assert product security or passing scenarios', () => {
  assert.throws(() => validatePrivacyDesign(changed(x => x.status = 'CERTIFIED')), /cannot claim/);
  assert.throws(() => validatePrivacyDesign(changed(x => x.negativeScenarios[0].status = 'PASSED')), /not a passing product test/);
});
