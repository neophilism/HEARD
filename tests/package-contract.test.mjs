import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,cpSync,readFileSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {verifyPackages} from '../scripts/check-package-contract.mjs';
test('workspace package and lockfile agree',()=>assert.equal(verifyPackages().packages,1));
test('rejects broken package export and lockfile',()=>{const root=mkdtempSync(join(tmpdir(),'heard-workspace-'));try{for(const item of ['package.json','package-lock.json','packages'])cpSync(item,join(root,item),{recursive:true});const p=join(root,'packages/contracts/package.json');const child=JSON.parse(readFileSync(p));child.exports['.'].types='./missing.d.mts';writeFileSync(p,JSON.stringify(child));assert.throws(()=>verifyPackages(root));}finally{rmSync(root,{recursive:true,force:true});}});
