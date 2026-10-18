import test from 'node:test';
import assert from 'node:assert/strict';
import {validatePublicPseudonym,privacyChoiceLabels,canIssueRecoveryToken} from '../packages/identity/pseudonym-policy.mjs';

test('normalizes public pseudonyms and rejects privileged impersonation',()=>{
 assert.equal(validatePublicPseudonym('  Example  '),'Example');
 for(const n of ['admin','support','a','<script>','', 'x'.repeat(49)])assert.throws(()=>validatePublicPseudonym(n));
});
test('recovery disabled without verified expiry, rate limit and hashed token persistence',()=>{
 assert.equal(canIssueRecoveryToken({secretsConfigured:true,ttlSeconds:3600}),false);
 assert.equal(canIssueRecoveryToken({secretsConfigured:true,ttlSeconds:3600,rateLimitVerified:true,tokenHashStorageVerified:true}),true);
});
test('display choices are explicit and do not assert anonymity',()=>{
 assert.equal(Object.keys(privacyChoiceLabels).length,3);
 assert.doesNotMatch(JSON.stringify(privacyChoiceLabels),/guarantee|anonymous to everyone/i);
});
