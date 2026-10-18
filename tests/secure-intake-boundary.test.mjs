import test from 'node:test';
import assert from 'node:assert/strict';
import {assertIntakeReady,assertScopedIntakeRequest} from '../packages/secure-intake-boundary/index.mjs';

test('unverified or unversioned integration fails closed', () => {
  for (const x of [null,{}, {verified:false,apiVersion:'v1',endpoint:'https://example.org',capability:'createPrivateInquiry'}, {verified:true,apiVersion:'latest',endpoint:'https://example.org',capability:'createPrivateInquiry'}, {verified:true,apiVersion:'v1',endpoint:'http://example.org',capability:'createPrivateInquiry'}, {verified:true,apiVersion:'v1',endpoint:'https://user:pass@example.org',capability:'createPrivateInquiry'}]) {
    assert.throws(()=>assertIntakeReady(x));
  }
});
test('verified configuration exposes version and capability only', () => {
  const x=assertIntakeReady({verified:true,apiVersion:'v1',endpoint:'https://example.org',capability:'createPrivateInquiry'});
  assert.deepEqual(x,{apiVersion:'v1',capability:'createPrivateInquiry'});
});
test('scoped requests reject missing subject, resource or purpose',()=>{
  assert.throws(()=>assertScopedIntakeRequest({subjectId:'subject01',resourceId:'resource01'}));
  assert.equal(assertScopedIntakeRequest({subjectId:'subject01',resourceId:'resource01',purpose:'status'}),true);
});
