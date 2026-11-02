import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

export function verifyWorkspace(root = process.cwd()) {
  const read = (file) => JSON.parse(readFileSync(join(root, file), 'utf8'));
  const pkg = read('package.json');
  const ts = read('tsconfig.base.json').compilerOptions;
  const required = ['strict', 'noUncheckedIndexedAccess', 'exactOptionalPropertyTypes', 'isolatedModules', 'forceConsistentCasingInFileNames'];
  for (const key of required) {
    if (ts[key] !== true) throw new Error('Unsafe TypeScript baseline: ' + key);
  }
  if (pkg.private !== true) throw new Error('Monorepo root must be private');
  if (!pkg.engines?.node?.includes('22')) throw new Error('Node 22 runtime pin missing');
  const workspaces = pkg.workspaces ?? [];
  if (!Array.isArray(workspaces)) throw new Error('Invalid workspace declaration');
  const names = new Set();
  for (const item of workspaces) {
    if (!['apps/*', 'packages/*'].includes(item)) throw new Error('Unsupported workspace glob: ' + item);
    const parent = join(root, item.slice(0, -2));
    if (!existsSync(parent)) continue;
    for (const entry of readdirSync(parent, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const dir = join(parent, entry.name);
      if (!existsSync(join(dir, 'package.json'))) continue;
      const child = JSON.parse(readFileSync(join(dir, 'package.json'), 'utf8'));
      if (!child.name || names.has(child.name)) throw new Error('Duplicate or missing workspace name');
      names.add(child.name);
      if (!child.private) throw new Error('Unapproved public workspace: ' + child.name);
      if (existsSync(join(dir, 'tsconfig.json'))) {
        const config = JSON.parse(readFileSync(join(dir, 'tsconfig.json'), 'utf8'));
        if (!config.extends || resolve(dir, config.extends) !== resolve(root, 'tsconfig.base.json'))
          throw new Error('Workspace does not extend strict base: ' + child.name);
      }
    }
  }
  return { workspaceCount: names.size, strict: true };
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(new URL(import.meta.url).pathname)) {
  process.stdout.write(JSON.stringify(verifyWorkspace()) + '\n');
}
