const STATES=['draft','submitted','withdrawn'];
export function decideDraftTransition({from,to,actorIsOwner,storageReady,consentRecorded}){
 if(!STATES.includes(from)||!STATES.includes(to)||actorIsOwner!==true)return {allowed:false};
 if(from==='draft'&&to==='submitted')return {allowed:storageReady===true&&consentRecorded===true};
 if(from==='draft'&&to==='withdrawn')return {allowed:true};
 return {allowed:false};
}
/** Caller must derive verifiedCommit from a durable, authenticated store acknowledgment. */
export function publicSubmissionReceipt({id,status,verifiedCommit}){
 if(typeof id!=='string'||!/^[-_a-zA-Z0-9]{12,128}$/.test(id)||status!=='submitted'||verifiedCommit!==true)
   throw new Error('No verified submission receipt');
 return Object.freeze({reference:id,status:'submitted'});
}
