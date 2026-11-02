import test from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { readFileSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';

test('secret scan rejects a synthetic private-key fixture and masks its output', () => {
  const pkg = JSON.parse(readFileSync('node_modules/secretlint/package.json', 'utf8'));
  const bin = typeof pkg.bin === 'string' ? pkg.bin : pkg.bin.secretlint;
  // Ephemeral test-only key, never assigned to any account or service.
  const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 1024 });
  const fixture = privateKey.export({ type: 'pkcs8', format: 'pem' });
  const result = spawnSync(process.execPath, [resolve('node_modules/secretlint', bin), '--stdinFileName=fixture.pem'], { input: fixture, encoding: 'utf8' });
  assert.equal(result.status, 1, 'secret detector must reject the synthetic key');
  assert.ok(!result.stdout.includes(fixture.split('\n')[1]), 'scanner must mask matched secret content');
});

test('actual pinned TypeScript compiler rejects an intentional type error', () => {
  const root = mkdtempSync(join(tmpdir(), 'heard-type-negative-'));
  try {
    const file = join(root, 'negative.mts');
    writeFileSync(file, 'const invalid: number = "intentional compiler failure"; export { invalid };');
    const result = spawnSync(process.execPath, [resolve('node_modules/typescript/bin/tsc'), '--strict', '--noEmit', '--skipLibCheck', '--target', 'ES2022', '--module', 'NodeNext', '--moduleResolution', 'NodeNext', file], { encoding: 'utf8' });
    assert.notEqual(result.status, 0, 'compiler must fail on the negative fixture');
    assert.match(result.stdout, /TS2322/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
