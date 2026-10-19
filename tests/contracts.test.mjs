import test from 'node:test';
import assert from 'node:assert/strict';
import {assertPublicRecord} from '../packages/contracts/src/index.mjs';
const record={id:'guide_1',kind:'rights-guide',title:'Rights guide',summary:'Public educational summary',sourceStatus:'record',reviewedAt:'2026-10-18T00:00:00Z'};
test('accepts bounded public derivative',()=>assert.equal(assertPublicRecord(record).id,'guide_1'));
test('rejects private and unreviewed fields',()=>{for(const change of [{privateQuestion:'secret'},{contactEmail:'person@example.org'},{sourceStatus:'unreviewed'},{summary:'x'.repeat(501)}])assert.throws(()=>assertPublicRecord({...record,...change}));});
