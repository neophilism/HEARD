import {readFileSync, readdirSync, existsSync} from 'node:fs';
import {join} from 'node:path';
export function verifyPackages(root=process.cwd()) {
  const read=(name)=>JSON.parse(readFileSync(join(root,name),'utf8'));
  const pkg=read('package.json'),lock=read('package-lock.json');
  if (!Array.isArray(pkg.workspaces) || !pkg.workspaces.includes('packages/*') || lock.lockfileVersion < 3 || lock.packages?.['']?.name!==pkg.name) throw new Error('Workspace lock mismatch');
  for (const [name, version] of Object.entries({...pkg.dependencies, ...pkg.devDependencies})) {
    if (!/^\d+\.\d+\.\d+$/.test(version) || lock.packages?.[`node_modules/${name}`]?.version!==version) throw new Error(`Unpinned dependency: ${name}`);
  }
  const dirs=readdirSync(join(root,'packages'),{withFileTypes:true}).filter(entry=>entry.isDirectory()).map(entry=>entry.name);
  if (!dirs.length) throw new Error('No workspace packages');
  for (const dir of dirs) {
    const path=`packages/${dir}`;
    const child=read(`${path}/package.json`);
    if (child.private!==true || child.type!=='module' || child.exports?.['.']?.types!== './src/index.d.mts' || child.exports?.['.']?.default!=='./src/index.mjs' || !existsSync(join(root,path,'tsconfig.json'))) throw new Error(`Invalid package contract: ${path}`);
    const ts=read(`${path}/tsconfig.json`);
    if (ts.extends!=='../../tsconfig.base.json' || !existsSync(join(root,path,'src/index.d.mts')) || !existsSync(join(root,path,'src/index.mjs'))) throw new Error(`Missing types or runtime: ${path}`);
    if (lock.packages?.[path]?.name!==child.name || lock.packages?.[`node_modules/${child.name}`]?.link!==true) throw new Error(`Unpinned workspace: ${path}`);
  }
  let apps=0;
  if (pkg.workspaces.includes('apps/*')) {
    for (const entry of readdirSync(join(root,'apps'),{withFileTypes:true}).filter(entry=>entry.isDirectory())) {
      const path=`apps/${entry.name}`;
      const app=read(`${path}/package.json`), locked=lock.packages?.[path];
      if (!app.private || app.type!=='module' || locked?.name!==app.name || lock.packages?.[`node_modules/${app.name}`]?.resolved!==path || lock.packages?.[`node_modules/${app.name}`]?.link!==true) throw new Error(`Unpinned app workspace: ${path}`);
      for (const section of ['dependencies','devDependencies']) {
        if (JSON.stringify(app[section]??{})!==JSON.stringify(locked[section]??{})) throw new Error(`App manifest/lock mismatch: ${path}`);
        for (const [name,version] of Object.entries(app[section]??{})) {
          const resolved=lock.packages?.[`${path}/node_modules/${name}`]??lock.packages?.[`node_modules/${name}`];
          if (!/^\d+\.\d+\.\d+$/.test(version) || resolved?.version!==version) throw new Error(`Unpinned app dependency: ${name}`);
        }
      }
      apps++;
    }
  }
  return {packages:dirs.length,apps,locked:true};
}
if (process.argv[1]?.endsWith('check-package-contract.mjs')) process.stdout.write(JSON.stringify(verifyPackages())+'\n');

