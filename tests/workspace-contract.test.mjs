import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { verifyWorkspace } from '../scripts/check-workspace-contract.mjs';

function fixture(testBody) {
  const root = mkdtempSync(join(tmpdir(), 'heard-workspace-'));
  const write = (path, value) => {
    const parts = path.split('/'); if (parts.length > 1) mkdirSync(join(root, ...parts.slice(0,-1)), {recursive:true});
    writeFileSync(join(root, path), JSON.stringify(value));
  };
  try {
    const flags = Object.fromEntries(['strict','noUncheckedIndexedAccess','exactOptionalPropertyTypes','isolatedModules','forceConsistentCasingInFileNames'].map(key=>[key,true]));
    write('package.json', {private:true,engines:{node:'>=22'},workspaces:['apps/*']});
    write('tsconfig.base.json',{compilerOptions:flags});
    testBody({root,write,flags});
  } finally {rmSync(root,{recursive:true,force:true});}
}

test('strict empty workspace baseline is accepted',()=>fixture(({root})=>assert.equal(verifyWorkspace(root).strict,true)));
test('unsafe compiler setting is rejected',()=>fixture(({root,write,flags})=>{write('tsconfig.base.json',{compilerOptions:{...flags,strict:false}});assert.throws(()=>verifyWorkspace(root),/Unsafe TypeScript/);}));
test('duplicate package names are rejected',()=>fixture(({root,write})=>{write('apps/one/package.json',{name:'same',private:true});write('apps/two/package.json',{name:'same',private:true});assert.throws(()=>verifyWorkspace(root),/Duplicate/);}));
test('workspace TypeScript must extend the strict base',()=>fixture(({root,write})=>{write('apps/one/package.json',{name:'one',private:true});write('apps/one/tsconfig.json',{extends:'./unsafe.json'});assert.throws(()=>verifyWorkspace(root),/strict base/);}));
