import test from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, unlinkSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { scanHistory } from '../../scripts/check-history-secrets.mjs';

test('history scanner detects an ephemeral test key deleted from the current tree', () => {
  const root = mkdtempSync(join(tmpdir(), 'heard-history-fixture-'));
  function git(args) {
    const result = spawnSync('git', args, { cwd: root, encoding: 'utf8' });
    assert.equal(result.status, 0, 'synthetic repository setup failed');
  }
  const commit = message => git(['-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid', '-c', 'commit.gpgsign=false', 'commit', '-m', message]);
  try {
    git(['init', '--quiet']);
    writeFileSync(join(root, 'README.md'), 'Synthetic local repository, no accounts or service credentials.');
    git(['add', '.']); commit('Clean fixture');
    assert.equal(scanHistory(root).passed, true);
    const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 1024 });
    const fixture = privateKey.export({ type: 'pkcs8', format: 'pem' });
    writeFileSync(join(root, 'fixture.pem'), fixture, { mode: 0o600 });
    git(['add', '.']); commit('Ephemeral synthetic key fixture');
    unlinkSync(join(root, 'fixture.pem'));
    git(['add', '-u']); commit('Remove fixture key');
    const result = scanHistory(root);
    assert.equal(result.passed, false, 'deleted historical key must still block');
    assert.ok(!result.diagnostics.includes(fixture.split('\n')[1]), 'history output must mask secret content');
  } finally { rmSync(root, { recursive: true, force: true }); }
});
