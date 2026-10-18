const SUPPORTED = new Set(['createPrivateInquiry', 'readOwnCaseStatus', 'requestScopedHelperGrant']);

/** Fail-closed contract guard. Does not call an external provider. */
export function assertIntakeReady(config) {
  if (!config || typeof config !== 'object' || config.verified !== true ||
    typeof config.apiVersion !== 'string' || !/^v[1-9][0-9]*$/.test(config.apiVersion) ||
    typeof config.endpoint !== 'string' || !config.endpoint.startsWith('https://') ||
    typeof config.capability !== 'string' || !SUPPORTED.has(config.capability)) {
    throw new Error('Secure Intake adapter unavailable: verified capability contract required');
  }
  if (new URL(config.endpoint).username || new URL(config.endpoint).password) {
    throw new Error('Secure Intake adapter endpoint must not embed credentials');
  }
  return Object.freeze({apiVersion: config.apiVersion, capability: config.capability});
}

export function assertScopedIntakeRequest(request) {
  if (!request || typeof request !== 'object' || Array.isArray(request) ||
      typeof request.subjectId !== 'string' || !/^[a-zA-Z0-9_-]{8,128}$/.test(request.subjectId) ||
      typeof request.resourceId !== 'string' || !/^[a-zA-Z0-9_-]{8,128}$/.test(request.resourceId) ||
      typeof request.purpose !== 'string' || request.purpose.length < 4 || request.purpose.length > 64) {
    throw new Error('Scoped subject/resource/purpose required');
  }
  return true;
}
