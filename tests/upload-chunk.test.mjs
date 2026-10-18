import test from 'node:test';
import assert from 'node:assert/strict';
import {validateUploadChunk} from '../packages/uploads/chunk-policy.mjs';
const valid={verifiedOwner:true,quarantinedDestination:true,offset:0,length:1024,totalBytes:2048,expectedSha256:'a'.repeat(64)};
test('bounded and authenticated quarantine-only chunk',()=>assert.equal(validateUploadChunk(valid).length,1024));
test('rejects offset overflow, bad hash and unquarantined public destination',()=>{
 for(const x of [{...valid,offset:2048},{...valid,length:9*1024*1024},{...valid,expectedSha256:'invalid'},{...valid,quarantinedDestination:false},{...valid,verifiedOwner:false}])assert.throws(()=>validateUploadChunk(x));
});
