import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

// Architecture lint only. These checks do not enforce production access or prove
// runtime encryption, redaction, inventory completeness or E2EESA conformance.
export function validatePrivacyDesign(model) {
  assert.equal(model.schemaVersion, 1);
  assert.ok(Number.isInteger(model.designVersion) && model.designVersion > 0);
  assert.equal(model.status, 'DESIGN_ONLY', 'design cannot claim implementation');
  assert.match(model.sourceSnapshot, /^[a-f0-9]{40}$/);
  const unique = (items, label) => {
    const ids = items.map(x => x.id);
    assert.equal(new Set(ids).size, ids.length, `duplicate ${label}`);
    return new Set(ids);
  };
  const components = unique(model.components, 'component');
  const flows = unique(model.flows, 'flow');
  const categories = new Set(model.negativeScenarios.map(x => x.category));
  unique(model.negativeScenarios, 'scenario');
  const text = (value, label) => assert.ok(typeof value === 'string' && value.trim().length >= 8, `${label} missing`);
  const refs = (values, allowed, label) => {
    assert.ok(Array.isArray(values) && values.length, `${label} missing`);
    assert.equal(new Set(values).size, values.length, `duplicate ${label}`);
    for (const id of values) assert.ok(allowed.has(id), `unknown ${label}: ${id}`);
  };
  for (const component of model.components) {
    text(component.description, 'component description');
    assert.equal(component.implementationStatus, 'PLANNED');
  }
  for (let i = 1; i <= 16; i++) assert.ok(flows.has(`F${String(i).padStart(2, '0')}`), 'required flow missing');
  const publicSinks = new Set(['public-store', 'public-reader', 'replica', 'public-source']);
  const gates = new Set(['PUBLIC_APPROVAL', 'PRIVATE_SCOPE', 'IDENTITY_COMPARTMENT', 'RECIPIENT_GRANT', 'CONSENT_AND_REVIEW', 'SEPARATE_REPLICATION_CONSENT', 'CONTACT_OPT_IN', 'MINIMIZED_TELEMETRY', 'DISTINCT_FEDERATION_CONSENT', 'PROFILE_UNAVAILABLE_DISABLED']);
  for (const flow of model.flows) {
    assert.ok(Object.hasOwn(model.classes, flow.classification), 'unknown classification');
    assert.ok(components.has(flow.source) && components.has(flow.destination), 'unknown component endpoint');
    for (const key of ['intendedRecipients', 'plaintextCapableActors', 'metadataCapableActors']) refs(flow[key], components, key);
    for (const key of ['data', 'purpose', 'protection', 'keyCustody', 'retentionDecision']) text(flow[key], key);
    assert.equal(flow.implementationStatus, 'PLANNED');
    assert.ok(gates.has(flow.releaseGate), 'unknown release gate');
    assert.ok(flow.requirementIds.length && flow.requirementIds.every(x => /^HEARD-(0[1-9]|[1-3][0-9]|4[0-8])$/.test(x)), 'requirement mapping required');
    if (publicSinks.has(flow.destination)) assert.equal(flow.classification, 'C0', 'restricted data at public sink');
    if (flow.destination === 'replica') assert.equal(flow.releaseGate, 'SEPARATE_REPLICATION_CONSENT', 'replication needs separate consent');
    if (flow.source === 'projector') assert.equal(flow.releaseGate, 'CONSENT_AND_REVIEW', 'projection needs current consent and review');
    if (flow.classification === 'C3') assert.equal(flow.releaseGate, 'IDENTITY_COMPARTMENT', 'identity compartment required');
    if (flow.id === 'F16') assert.equal(flow.releaseGate, 'PROFILE_UNAVAILABLE_DISABLED', 'unsupported messaging profile remains disabled');
  }
  const actors = new Set(['harasser', 'malicious-submitter', 'insider', 'hostile-collaborator', 'compromised-worker', 'provider', 'unauthorized-requester']);
  const coveredActors = new Set();
  for (const scenario of model.negativeScenarios) {
    refs(scenario.flows, flows, 'scenario flow');
    refs(scenario.actors, actors, 'threat actor');
    scenario.actors.forEach(x => coveredActors.add(x));
    text(scenario.trigger, 'negative trigger'); text(scenario.expected, 'expected safe result');
    assert.match(scenario.testDestination, /^tests\/(security|integration)\/[a-z-]+\/$/);
    assert.equal(scenario.status, 'PLANNED_NOT_EXECUTED', 'scenario is not a passing product test');
  }
  for (const actor of actors) assert.ok(coveredActors.has(actor), `uncovered threat actor ${actor}`);
  for (const category of ['reidentification', 'political-linkage', 'incorrect-publication', 'metadata-export', 'helper-overreach', 'false-e2ee']) assert.ok(categories.has(category), `missing negative scenario ${category}`);
  assert.ok(model.limitations.length >= 3, 'coverage limitations required');
  return model.flows.length;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const model = JSON.parse(readFileSync(new URL('../security/privacy-design.json', import.meta.url), 'utf8'));
  console.log(`Privacy design traceability valid: ${validatePrivacyDesign(model)} planned flows; runtime controls unverified.`);
}
