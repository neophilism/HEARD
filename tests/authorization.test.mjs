import test from 'node:test';
import assert from 'node:assert/strict';
import {authorizeResource} from '../packages/authorization/policy.mjs';
const base={authenticated:true,resourceVerified:true,subjectId:'owner1',ownerId:'owner1',resourceId:'case1',action:'case.read'};
test('unknown, unauthenticated or unverified access denies',()=>{
 for(const x of [null,{}, {...base,authenticated:false},{...base,resourceVerified:false},{...base,action:'case.admin'}])assert.equal(authorizeResource(x),false);
});
test('owner can read but self-approve publication is blocked',()=>{
 assert.equal(authorizeResource(base),true);
 assert.equal(authorizeResource({...base,action:'publication.review',staffRole:'reviewer',staffVerified:true,assignedReviewVerified:true}),false);
});
test('reviewer cannot approve arbitrary private cases based only on staff role',()=>{
 const reviewer={...base,subjectId:'reviewer1',action:'publication.review',staffRole:'reviewer',staffVerified:true};
 assert.equal(authorizeResource(reviewer),false);
 assert.equal(authorizeResource({...reviewer,assignedReviewVerified:false}),false);
 assert.equal(authorizeResource({...reviewer,assignedReviewVerified:true}),true);
 assert.equal(authorizeResource({...reviewer,assignedReviewVerified:true,resourceVerified:false}),false);
});
test('limited grant must be scoped, active and unexpired',()=>{
 const request={...base,subjectId:'helper1',nowMs:1000};
 const grant={subjectId:'helper1',resourceId:'case1',action:'case.read',active:true,expiresAtMs:2000};
 assert.equal(authorizeResource({...request,grants:[grant]}),true);
 assert.equal(authorizeResource({...request,grants:[{...grant,expiresAtMs:999}]}),false);
 assert.equal(authorizeResource({...request,grants:[{...grant,resourceId:'case2'}]}),false);
});
