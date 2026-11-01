const SUPPORTED = new Set(['createPrivateInquiry', 'readOwnCaseStatus', 'requestScopedHelperGrant']);

/** Fail-closed contract guard. Does not call an external provider. */
export function assertIntakeReady(config) {
  if (!config || typeof config !== 'object' || config.verified !== true ||
    typeof config.apiVersion !== 'string' || !/^v[1-9][0-9]*$/.test(config.apiVersion) ||
    typeof config.endpoint !== 'string' || !config.endpoint.startsWith('https://') ||
    typeof config.capability !== 'string' || !SUPPORTED.has(config.capability)) {
    throw new Error('Secure Intake adapter unavailable: verified capability contract required');
  }
  const endpoint = new URL(config.endpoint);
  if (/\s/.test(config.endpoint) || endpoint.protocol !== 'https:' || endpoint.search || endpoint.hash) {
    throw new Error('Secure Intake endpoint must be an HTTPS base without whitespace, query or fragment');
  }
  if (endpoint.username || endpoint.password) {
    throw new Error('Secure Intake adapter endpoint must not embed credentials');
  }
  return Object.freeze({apiVersion: config.apiVersion, capability: config.capability});
}

export function assertScopedIntakeRequest(request) {
  // Shape validation is not identity or permission verification. Do not forward
  // caller-owned extras or invoke accessor properties during validation.
  if (request && typeof request === 'object') {
    const prototype=Object.getPrototypeOf(request);
    const allowed=new Set(['subjectId','resourceId','purpose']);
    if ((prototype!==Object.prototype && prototype!==null) || Reflect.ownKeys(request).some(key=>!allowed.has(key)) || Object.values(Object.getOwnPropertyDescriptors(request)).some(d=>!Object.hasOwn(d,'value'))) throw new Error('Plain scoped request fields required');
  }
  if (!request || typeof request !== 'object' || Array.isArray(request) ||
      typeof request.subjectId !== 'string' || !/^[a-zA-Z0-9_-]{8,128}$/.test(request.subjectId) ||
      typeof request.resourceId !== 'string' || !/^[a-zA-Z0-9_-]{8,128}$/.test(request.resourceId) ||
      typeof request.purpose !== 'string' || request.purpose.trim().length < 4 || request.purpose !== request.purpose.trim() || /[\u0000-\u001f\u007f]/.test(request.purpose) || request.purpose.length > 64) {
    throw new Error('Scoped subject/resource/purpose required');
  }
  return true;
}

