import test from 'node:test';
import assert from 'node:assert/strict';
import {steps,nextWizardStep,canSubmitExperience} from '../packages/intake-wizard/flow.mjs';
test('wizard provides ordered, readable steps',()=>{
 assert.equal(steps[0].id,'overview');assert.equal(steps.at(-1).id,'review');
 assert.equal(new Set(steps.map(x=>x.id)).size,steps.length);
});
test('privacy acknowledgement cannot be bypassed',()=>{
 assert.equal(nextWizardStep('privacy').blocked,true);
 assert.equal(nextWizardStep('privacy',{privacyAcknowledged:true}).next,'account');
});
test('submission defaults off pending verified intake and consent',()=>{
 assert.equal(canSubmitExperience({verifiedIntake:true}),false);
 assert.equal(canSubmitExperience({verifiedIntake:true,consentRecorded:true,privateStorageReady:true,authenticatedSubmission:true}),true);
 assert.equal(nextWizardStep('review').blocked,true);
});
