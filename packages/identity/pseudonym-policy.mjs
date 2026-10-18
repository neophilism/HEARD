const RESERVED=new Set(['admin','moderator','support','heard','official','system']);
export function validatePublicPseudonym(value) {
  if(typeof value!=='string')throw new Error('Invalid public name');
  const name=value.normalize('NFKC').trim();
  if(name.length<3||name.length>48||!^[\p{L}\p{N}][\p{L}\p{N} ._-]*$/u.test(name)||RESERVED.has(name.toLowerCase()))throw new Error('Invalid public name');
  return name;
}
/** Never claim that a pseudonym guarantees anonymity. */
export const privacyChoiceLabels=Object.freeze({named:'Display chosen name',pseudonymous:'Display chosen pseudonym',private:'Keep public identity hidden'});
export function canIssueRecoveryToken(config){return config?.secretsConfigured===true&&config?.ttlSeconds>0&&config?.ttlSeconds<=86400&&config?.rateLimitVerified===true&&config?.tokenHashStorageVerified===true;}
