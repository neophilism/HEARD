import test from 'node:test';
import assert from 'node:assert/strict';
import {allowedByConsent,requiresDistinctConsent} from '../packages/consent/policy.mjs';
const request={subjectId:'u1',resourceId:'case1',purpose:'public_release',atMs:100};
const grant={...request,decision:'grant',policyVersion:'v1',timestamp:10};
test('separate consent defaults to deny and never implies replication',()=>{
 assert.equal(allowedByConsent([],request),false);
 assert.equal(allowedByConsent([grant],request),true);
 assert.equal(allowedByConsent([grant],{...request,purpose:'archive_replication'}),false);
});
test('revocation wins after a grant and at ambiguous same timestamps',()=>{
 const revoke={...grant,decision:'revoke',timestamp:11};
 assert.equal(allowedByConsent([grant,revoke],request),false);
 const tied={...revoke,timestamp:10};
 assert.equal(allowedByConsent([grant,tied],request),false);
 assert.equal(allowedByConsent([tied,grant],request),false);
});
test('grant is case-, subject-, purpose- and version-scoped',()=>{
 assert.equal(allowedByConsent([grant],{...request,resourceId:'case2'}),false);
 assert.equal(allowedByConsent([{...grant,policyVersion:''}],request),false);
 assert.equal(requiresDistinctConsent('helper_access'),true);
});
