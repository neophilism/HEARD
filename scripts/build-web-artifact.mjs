import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, readdirSync, lstatSync, mkdirSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export const digest = bytes => createHash('sha256').update(bytes).digest('hex');
function run(command, args, options = {}) {
  const result = spawnSync(command, args, { stdio: 'inherit', ...options });
  if (result.error || result.status !== 0) throw new Error(`${command} failed; no artifact acceptance asserted`);
}
function files(directory) {
  return readdirSync(directory).sort().flatMap(name => {
    const path = join(directory, name);
    const stat = lstatSync(path);
    if (stat.isSymbolicLink()) throw new Error('Artifact cannot include symlinks');
    return stat.isDirectory() ? files(path) : [path];
  });
}
export function verifyArchive(manifestPath) {
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  if (!/^[a-f0-9]{40}$/.test(manifest.sourceCommit)) throw new Error('Missing immutable source commit');
  if (manifest.archive !== `heard-web-${manifest.sourceCommit}.tar`) throw new Error('Invalid artifact filename');
  const archive = join(resolve(manifestPath, '..'), manifest.archive);
  if (digest(readFileSync(archive)) !== manifest.archiveSha256) throw new Error('Artifact digest mismatch');
  return manifest;
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (process.argv[2] === '--verify') {
    verifyArchive(process.argv[3]);
    console.log('Artifact digest verified. Deployment and source authorization require separate evidence.');
  } else {
    const sha = process.env.HEARD_BUILD_SHA;
    if (!sha || !/^[a-f0-9]{40}$/.test(sha)) throw new Error('Set HEARD_BUILD_SHA to the exact verified source commit; no unbound artifact is produced.');
    let sourceBinding = 'supplied Boardroom snapshot mirror; inspect file digests against immutable source';
    if (existsSync('.git')) {
      const head = spawnSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' });
      const dirty = spawnSync('git', ['status', '--porcelain', '--untracked-files=no'], { encoding: 'utf8' });
      if (head.status !== 0 || head.stdout.trim() !== sha || dirty.status !== 0 || dirty.stdout.trim()) throw new Error('Artifact requires a clean checkout at HEARD_BUILD_SHA');
      sourceBinding = 'clean Git checkout at sourceCommit';
    }
    run('npm', ['run', 'build'], { env: { ...process.env, HEARD_BUILD_SHA: sha, NEXT_TELEMETRY_DISABLED: '1' } });
    run('npm', ['run', 'test:web']);
    if (readFileSync('apps/web/.next/BUILD_ID', 'utf8').trim() !== sha) throw new Error('Build identifier does not match source commit');
    mkdirSync('dist', { recursive: true });
    const archive = `heard-web-${sha}.tar`;
    run('tar', ['--sort=name', '--mtime=@0', '--owner=0', '--group=0', '--numeric-owner', '-cf', `dist/${archive}`, '-C', 'apps/web/out', '.']);
    const sourceFiles = ['package.json', 'package-lock.json', 'tsconfig.base.json', 'content/site-copy.json', ...files('apps/web/app'), ...files('apps/web/lib'), 'apps/web/package.json', 'apps/web/next.config.mjs', 'apps/web/tsconfig.json'];
    const manifest = { schemaVersion: 1, sourceCommit: sha, sourceBinding, archive, archiveSha256: digest(readFileSync(`dist/${archive}`)), sourceFiles: Object.fromEntries(sourceFiles.sort().map(path => [path, digest(readFileSync(path))])), exportedFiles: Object.fromEntries(files('apps/web/out').map(path => [path.slice('apps/web/out/'.length), digest(readFileSync(path))])) };
    const path = `dist/heard-web-${sha}.json`;
    writeFileSync(path, JSON.stringify(manifest, null, 2) + '\n');
    verifyArchive(path);
    console.log(`Created ${path}; SHA-256 ${manifest.archiveSha256}. No deployment is implied.`);
  }
}
