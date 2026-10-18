export const steps=Object.freeze([{id:'overview',label:'Choose what you want to share'},{id:'privacy',label:'Review privacy choices'},{id:'account',label:'Describe your experience'},{id:'evidence',label:'Optional supporting documents'},{id:'review',label:'Review before submitting'}]);
export function nextWizardStep(current,{privacyAcknowledged=false,intakeAvailable=false}={}){
 const index=steps.findIndex(x=>x.id===current);
 if(index<0)throw new Error('Unknown wizard step');
 if(current==='privacy'&&!privacyAcknowledged)return {blocked:true,reason:'Review who may process your information'};
 if(index===steps.length-1)return {blocked:true,reason:'Submission requires a verified secure intake service'};
 if(current==='review'&&!intakeAvailable)return {blocked:true,reason:'Secure intake unavailable'};
 return {blocked:false,next:steps[index+1].id};
}
export function canSubmitExperience(config){return config?.verifiedIntake===true&&config?.consentRecorded===true&&config?.privateStorageReady===true&&config?.authenticatedSubmission===true;}
