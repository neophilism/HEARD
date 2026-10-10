import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read=(path)=>readFileSync(new URL('../'+path,import.meta.url),'utf8');
test('mission serves many independent visitor paths',()=>{
const text=read('README.md');
for(const item of ['Understand my rights','Ask about something that happened','Get help privately','Share an experience','Help someone else','Explore stories']) assert.ok(text.includes(item),item);
});
test('no false claim of live or safe production intake',()=>{assert.match(read('README.md'),/no production intake service/i);});
test('full plan and independent handoff are present',()=>{assert.ok(read('docs/DEVELOPMENT_PLAN.md').length>60000);assert.match(read('docs/CROSS_ACCOUNT_HANDOFF.md'),/independent-account handoff/i);});
