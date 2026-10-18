const VALID_STATES=new Set(['quarantined','scanning','cleared','rejected']);
export function evaluateMediaRelease(record){
 if(!record||!VALID_STATES.has(record.state)||record.state!=='cleared'||record.scanVerified!==true||record.typeVerified!==true||record.sizeVerified!==true||record.ownerAuthorized!==true||record.publicationApproved!==true)return false;
 return true;
}
export function allowedQuarantineTransition(from,to){
 return (from==='quarantined'&&to==='scanning')||(from==='scanning'&&(to==='cleared'||to==='rejected'))||(from==='cleared'&&to==='rejected');
}
