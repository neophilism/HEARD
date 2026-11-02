import test from 'node:test';
import assert from 'node:assert/strict';
import {assertPublicRecord} from '../packages/contracts/src/index.mjs';
const record={id:'guide_1',kind:'rights-guide',title:'Rights guide',summary:'Public educational summary',sourceStatus:'record',reviewedAt:'2026-10-18T00:00:00Z'};
test('accepts bounded public derivative',()=>assert.equal(assertPublicRecord(record).id,'guide_1'));
test('rejects private and unreviewed fields',()=>{for(const change of [{privateQuestion:'secret'},{contactEmail:'person@example.org'},{sourceStatus:'unreviewed'},{summary:'x'.repeat(501)}])assert.throws(()=>assertPublicRecord({...record,...change}));});

test('inherited fields cannot produce an empty accepted public record',()=>{
  assert.throws(()=>assertPublicRecord(Object.create(record)),/plain public record/);
});
test('symbol and hidden private fields cannot bypass the allowlist',()=>{
  assert.throws(()=>assertPublicRecord({...record,[Symbol('private')]: 'secret'}),/Unapproved/);
  const hidden={...record}; Object.defineProperty(hidden,'privateQuestion',{value:'secret'});
  assert.throws(()=>assertPublicRecord(hidden),/Unapproved/);
});
test('accessors are rejected without executing user code',()=>{
  let executed=false; const getter={...record};
  Object.defineProperty(getter,'title',{get(){executed=true;throw new Error('should never execute');},enumerable:true});
  assert.throws(()=>assertPublicRecord(getter),/Accessor/); assert.equal(executed,false);
});
test('review dates must be real UTC timestamps and text cannot be blank',()=>{
  for(const reviewedAt of ['2026-02-30T00:00:00Z','2026-10-18','10/18/2026','2026-10-18T25:00:00Z',null]) assert.throws(()=>assertPublicRecord({...record,reviewedAt}),/timestamp/);
  for(const change of [{title:' '},{summary:'\n'}]) assert.throws(()=>assertPublicRecord({...record,...change}));
  assert.equal(assertPublicRecord({...record,reviewedAt:'2026-10-18T00:00:00.123Z'}).reviewedAt,'2026-10-18T00:00:00.123Z');
  assert.ok(Object.isFrozen(assertPublicRecord(record)));
});

