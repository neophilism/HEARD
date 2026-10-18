export function publicLiveness() { return {status:'alive'}; }
/** Readiness never infers private-intake availability from liveness. */
export function assessReadiness(config={}) {
  const services=['database','secureIntake','objectStore'];
  const checks={};
  for (const service of services) checks[service]=config?.[service]?.verified===true && config?.[service]?.healthy===true;
  return {ready:Object.values(checks).every(Boolean),components:checks};
}
export function sanitizedError(error) {
  return {code:'SERVICE_UNAVAILABLE',message:'Service is temporarily unavailable'};
}
