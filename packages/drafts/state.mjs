const STATES=['draft','submitted','withdrawn'];
export function decideDraftTransition({from,to,actorIsOwner,storageReady,consentRecorded}){
 if(!STATES.includes(from)||!STATES.includes(to)||actorIsOwner!==true)return {allowed:false};
 if(from==='draft'&&to==='submitted')return {allowed:storageReady===true&&consentRecorded===true};
 if(from==='draft'&&to==='withdrawn')return {allowed:true};
 return {allowed:false};
}
export function publicSubmissionReceipt({id,status}){
 if(typeof id!=='string'||!/^[-_a-zA-Z0-9]{12,128}$/.test(id)||status!=='submitted')throw new Error('No verified submission receipt');
 return Object.freeze({reference:id,status:'submitted'});
}
