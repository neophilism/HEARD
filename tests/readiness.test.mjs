import test from 'node:test';
import assert from 'node:assert/strict';
import {publicLiveness,assessReadiness,sanitizedError} from '../packages/operations/readiness.mjs';

test('liveness is non-sensitive',()=>assert.deepEqual(publicLiveness(),{status:'alive'}));
test('readiness fails closed if any private dependency absent',()=>{
 assert.equal(assessReadiness().ready,false);
 assert.equal(assessReadiness({database:{verified:true,healthy:true},secureIntake:{verified:true,healthy:true}}).ready,false);
 assert.equal(assessReadiness({database:{verified:true,healthy:true},secureIntake:{verified:true,healthy:true},objectStore:{verified:true,healthy:true}}).ready,true);
});
test('sanitized operational failure never exposes secrets',()=>{
 assert.doesNotMatch(JSON.stringify(sanitizedError(new Error('credential=supersecret'))),/supersecret/);
});
