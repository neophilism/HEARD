import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,cpSync,readFileSync,writeFileSync,rmSync,mkdirSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {verifyPackages} from '../scripts/check-package-contract.mjs';
test('workspace package and lockfile agree',()=>assert.equal(verifyPackages().packages,1));
test('rejects broken package export and lockfile',()=>{const root=mkdtempSync(join(tmpdir(),'heard-workspace-'));try{for(const item of ['package.json','package-lock.json','packages'])cpSync(item,join(root,item),{recursive:true});const p=join(root,'packages/contracts/package.json');const child=JSON.parse(readFileSync(p));child.exports['.'].types='./missing.d.mts';writeFileSync(p,JSON.stringify(child));assert.throws(()=>verifyPackages(root));}finally{rmSync(root,{recursive:true,force:true});}});

test('app dependencies cannot drift from exact versions and resolved lock entries',()=>{
  const root=mkdtempSync(join(tmpdir(),'heard-app-lock-'));
  try {
    for(const item of ['package.json','package-lock.json','packages'])cpSync(item,join(root,item),{recursive:true});
    mkdirSync(join(root,'apps/web'),{recursive:true});
    const appPath=join(root,'apps/web/package.json'), lockPath=join(root,'package-lock.json');
    const app=JSON.parse(readFileSync('apps/web/package.json'));
    const lock=JSON.parse(readFileSync('package-lock.json'));
    writeFileSync(appPath,JSON.stringify(app));
    assert.equal(verifyPackages(root).apps,1);
    const ranged={...app,dependencies:{...app.dependencies,next:'^'+app.dependencies.next}};
    writeFileSync(appPath,JSON.stringify(ranged));
    assert.throws(()=>verifyPackages(root),/manifest\/lock mismatch/);
    const rangedLock=structuredClone(lock);rangedLock.packages['apps/web'].dependencies.next=ranged.dependencies.next;
    writeFileSync(lockPath,JSON.stringify(rangedLock));
    assert.throws(()=>verifyPackages(root),/Unpinned app dependency/);
    writeFileSync(appPath,JSON.stringify(app));
    const mismatched=structuredClone(lock);mismatched.packages['node_modules/next'].version='0.0.0';
    writeFileSync(lockPath,JSON.stringify(mismatched));
    assert.throws(()=>verifyPackages(root),/Unpinned app dependency/);
  } finally {rmSync(root,{recursive:true,force:true});}
});

