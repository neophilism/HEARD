const ALLOWED_ACTIONS=new Set(['case.read','case.write','evidence.read','helper.grant','publication.review']);
/** Pure policy decision only; caller must authenticate identities and validate grants. */
export function authorizeResource(input){
 if(!input||typeof input!=='object'||!ALLOWED_ACTIONS.has(input.action)||
    typeof input.subjectId!=='string'||!input.subjectId||typeof input.resourceId!=='string'||!input.resourceId||
    input.authenticated!==true||input.resourceVerified!==true)return false;
 if(input.subjectId===input.ownerId && input.action!=='publication.review')return true;
 if(input.action==='publication.review')return input.staffRole==='reviewer'&&input.staffVerified===true&&input.subjectId!==input.ownerId;
 const grants=Array.isArray(input.grants)?input.grants:[];
 const now=Number.isFinite(input.nowMs)?input.nowMs:NaN;
 if(!Number.isFinite(now))return false;
 return grants.some(g=>g&&g.active===true&&g.resourceId===input.resourceId&&g.subjectId===input.subjectId&&g.action===input.action&&Number.isFinite(g.expiresAtMs)&&g.expiresAtMs>now);
}
