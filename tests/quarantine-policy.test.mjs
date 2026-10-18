import test from 'node:test';import assert from 'node:assert/strict';import {evaluateMediaRelease,allowedQuarantineTransition} from '../packages/media/quarantine-policy.mjs';
test('never release unscanned, unapproved or unauthorized bytes',()=>{
 const good={state:'cleared',scanVerified:true,typeVerified:true,sizeVerified:true,ownerAuthorized:true,publicationApproved:true};
 assert.equal(evaluateMediaRelease(good),true);
 for(const key of Object.keys(good))assert.equal(evaluateMediaRelease({...good,[key]:key==='state'?'quarantined':false}),false);
});
test('quarantine can reject cleared material; rejected cannot reopen',()=>{
 assert.equal(allowedQuarantineTransition('quarantined','cleared'),false);
 assert.equal(allowedQuarantineTransition('scanning','rejected'),true);
 assert.equal(allowedQuarantineTransition('rejected','cleared'),false);
});
