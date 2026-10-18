import test from 'node:test';
import assert from 'node:assert/strict';
import {decideDraftTransition,publicSubmissionReceipt} from '../packages/drafts/state.mjs';
test('draft submission requires owner, consent and storage',()=>{
 const args={from:'draft',to:'submitted',actorIsOwner:true,consentRecorded:true,storageReady:true};
 assert.equal(decideDraftTransition(args).allowed,true);
 assert.equal(decideDraftTransition({...args,consentRecorded:false}).allowed,false);
 assert.equal(decideDraftTransition({...args,actorIsOwner:false}).allowed,false);
});
test('a submitted draft cannot silently revert to draft',()=>{
 assert.equal(decideDraftTransition({from:'submitted',to:'draft',actorIsOwner:true}).allowed,false);
});
test('receipt contains reference only, not content',()=>{
 assert.deepEqual(publicSubmissionReceipt({id:'case-identifier-01',status:'submitted'}),{reference:'case-identifier-01',status:'submitted'});
 assert.throws(()=>publicSubmissionReceipt({id:'x',status:'draft'}));
});
