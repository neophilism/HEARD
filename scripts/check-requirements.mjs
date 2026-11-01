import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

// Compare the complete build and acceptance statements, not just unit names.
// A passing ledger check proves traceability only, never feature acceptance.
export function validateRequirements(ledger, plan, charter) {
  assert.equal(ledger.schemaVersion, 1, 'unsupported requirements schema');
  assert.ok(Number.isInteger(ledger.ledgerVersion) && ledger.ledgerVersion > 0, 'version required');
  assert.equal(ledger.source.path, 'docs/DEVELOPMENT_PLAN.md');
  assert.match(ledger.source.snapshotSha, /^[a-f0-9]{40}$/, 'immutable source snapshot required');
  const source = [...plan.matchAll(/\*\*(HEARD-\d{2}) — (.*?)\*\*\s*\nDependencies: (.*?)\s*\nBuild: (.*?)\s*\nAcceptance: (.*?)(?=\n\n|$)/gs)];
  assert.equal(source.length, 48, 'canonical plan must contain all 48 units');
  assert.equal(ledger.units.length, source.length, 'missing or extra requirements');
  const seen = new Set();
  for (const unit of ledger.units) {
    assert.ok(!seen.has(unit.id), `duplicate requirement ${unit.id}`);
    seen.add(unit.id);
    assert.equal(unit.id, `R-${unit.unitId}`, 'stable requirement/unit mapping required');
    const row = source.find(m => m[1] === unit.unitId);
    assert.ok(row, `unknown unit ${unit.unitId}`);
    for (const [key, index] of [['title', 2], ['dependencies', 3], ['build', 4], ['acceptance', 5]]) {
      assert.equal(unit[key], row[index], `${unit.id}: ${key} drifted from approved plan`);
    }
    assert.ok(typeof unit.owner === 'string' && unit.owner.trim(), `${unit.id}: owner required`);
    assert.match(unit.testDestination, /^tests\/(?:[a-z0-9-]+\/)*$/, 'planned test destination required');
    assert.ok(charter.includes(`| ${unit.id} | ${unit.title} | ${unit.owner} | ${unit.testDestination} | Planned |`), 'charter/ledger mapping drift');
    assert.equal(unit.decisionStatus, 'APPROVED_SCOPE', 'proposals cannot silently become approved scope');
    // This baseline is deliberately a planning register. Progress belongs in
    // source-bound PR evidence until a versioned schema for acceptance exists.
    assert.equal(unit.status, 'PLANNED', 'planning register cannot certify implementation');
    assert.deepEqual(unit.evidence, [], 'planning register must not imply passing checks');
  }
  return ledger.units.length;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
  const count = validateRequirements(JSON.parse(read('requirements/ledger.json')), read('docs/DEVELOPMENT_PLAN.md'), read('PRODUCT_REQUIREMENTS.md'));
  console.log(`Requirements traceability valid: ${count} planned units; no implementation acceptance asserted.`);
}
