const PURPOSES=new Set(['private_processing','contact','helper_access','public_release','archive_replication']);
/** Explicit event-sourced consent: default deny. Revoke wins ambiguous equal timestamps. */
export function allowedByConsent(events,{subjectId,resourceId,purpose,atMs}){
 if(!PURPOSES.has(purpose)||typeof subjectId!=='string'||!subjectId||typeof resourceId!=='string'||!resourceId||!Number.isFinite(atMs)||!Array.isArray(events))return false;
 let last=null;
 for(const event of events){
  if(!event||event.subjectId!==subjectId||event.resourceId!==resourceId||event.purpose!==purpose)continue;
  if(!['grant','revoke'].includes(event.decision)||typeof event.policyVersion!=='string'||!event.policyVersion||!Number.isFinite(event.timestamp)||event.timestamp>atMs)continue;
  if(!last||event.timestamp>last.timestamp||
    (event.timestamp===last.timestamp&&event.decision==='revoke'))last=event;
 }
 return last?.decision==='grant';
}
export function requiresDistinctConsent(purpose){return ['helper_access','public_release','archive_replication','contact'].includes(purpose);}
