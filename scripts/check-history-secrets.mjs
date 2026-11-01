import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync, mkdirSync, rmSync } from 'node:fs';
import { resolve, join, basename } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';

const project = process.cwd();
const pkg = JSON.parse(readFileSync(join(project, 'node_modules/secretlint/package.json'), 'utf8'));
const bin = resolve(project, 'node_modules/secretlint', typeof pkg.bin === 'string' ? pkg.bin : pkg.bin.secretlint);

export function scanHistory(repository = project) {
  function git(args, input) {
    const result = spawnSync('git', args, { cwd: repository, input, maxBuffer: 64 * 1024 * 1024 });
    if (result.error || result.status !== 0) throw new Error('Complete Git history is unavailable; secret history check did not run.');
    return result.stdout;
  }
  if (git(['rev-parse', '--show-toplevel']).toString().trim() !== resolve(repository)) throw new Error('Run the history check at the intended repository root.');
  if (git(['rev-parse', '--is-shallow-repository']).toString().trim() !== 'false') throw new Error('Full-history checkout required; refusing a partial history scan.');
  // Scan every blob reachable from the checked-out release candidate, including
  // deleted files. Other refs may contain unmerged work and are not release history.
  const objects = new Map(git(['rev-list', '--objects', 'HEAD']).toString().trim().split('\n').map(line => [line.slice(0, 40), line.slice(41)]));
  const ids = [...objects.keys()];
  if (!ids.length || ids.some(id => !/^[a-f0-9]{40}$/.test(id))) throw new Error('No complete source history available.');
  const types = git(['cat-file', '--batch-check'], ids.join('\n') + '\n').toString().trim().split('\n');
  const blobs = types.filter(line => line.split(' ')[1] === 'blob').map(line => line.split(' ')[0]);
  if (!blobs.length) throw new Error('History has no source blobs to scan.');
  const bytes = git(['cat-file', '--batch'], blobs.join('\n') + '\n');
  const root = mkdtempSync(join(tmpdir(), 'heard-history-scan-'));
  try {
    let offset = 0;
    for (const expected of blobs) {
      const end = bytes.indexOf(10, offset);
      if (end < 0) throw new Error('Incomplete historical blob stream.');
      const [sha, type, length] = bytes.subarray(offset, end).toString().split(' ');
      const size = Number(length);
      if (sha !== expected || type !== 'blob' || !Number.isSafeInteger(size) || size < 0 || end + 1 + size >= bytes.length) throw new Error('Historical blob integrity error.');
      const name = basename(objects.get(sha) || 'object.txt');
      if (!name || name === '.' || name === '..') throw new Error('Unsafe historical filename.');
      const directory = join(root, sha);
      mkdirSync(directory, { mode: 0o700 });
      writeFileSync(join(directory, name), bytes.subarray(end + 1, end + 1 + size), { mode: 0o600 });
      offset = end + size + 2;
    }
    const ignore = join(root, '.scanignore');
    writeFileSync(ignore, '');
    const result = spawnSync(process.execPath, [bin, '--no-gitignore', '--secretlintrc', join(project, '.secretlintrc.json'), '--secretlintignore', ignore, `${root}/**/*`], { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 });
    if (result.error || result.status === null) throw new Error('Secret detector failed to execute; no history pass asserted.');
    return { passed: result.status === 0, blobs: blobs.length, diagnostics: (result.stdout || '') + (result.stderr || '') };
  } finally { rmSync(root, { recursive: true, force: true }); }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = scanHistory();
  // The detector masks matched secrets by default. Never print blob contents.
  if (result.diagnostics) process.stdout.write(result.diagnostics);
  if (!result.passed) process.exit(1);
  console.log(`Scanned ${result.blobs} complete historical blobs with the configured detector; unknown secret patterns remain outside this claim.`);
}
