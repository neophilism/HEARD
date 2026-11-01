import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { digest, verifyArchive } from '../scripts/build-web-artifact.mjs';

test('artifact verification rejects changed bytes and substituted paths', () => {
  const root = mkdtempSync(join(tmpdir(), 'heard-artifact-'));
  try {
    const sha = 'a'.repeat(40);
    const archive = `heard-web-${sha}.tar`;
    const bytes = Buffer.from('synthetic artifact fixture');
    const manifest = { sourceCommit: sha, archive, archiveSha256: digest(bytes) };
    writeFileSync(join(root, archive), bytes);
    const path = join(root, 'manifest.json');
    writeFileSync(path, JSON.stringify(manifest));
    assert.equal(verifyArchive(path).sourceCommit, sha);
    writeFileSync(join(root, archive), 'tampered');
    assert.throws(() => verifyArchive(path), /digest mismatch/);
    writeFileSync(path, JSON.stringify({ ...manifest, archive: '../outside.tar' }));
    assert.throws(() => verifyArchive(path), /filename/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
