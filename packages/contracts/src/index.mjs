/** Public API data must be an intentional derivative with bounded provenance. */
export function assertPublicRecord(record) {
  if (!record || typeof record !== 'object' || Array.isArray(record)) throw new TypeError('Invalid public record');
  const keys=Object.keys(record);
  const allowed=new Set(['id','kind','title','summary','sourceStatus','reviewedAt']);
  if (keys.some(key=>!allowed.has(key))) throw new Error('Unapproved public field');
  if (typeof record.id!=='string' || !/^[A-Za-z0-9_-]{1,128}$/.test(record.id)) throw new Error('Invalid id');
  if (!['rights-guide','story'].includes(record.kind) || typeof record.title!=='string' || record.title.length>200 || typeof record.summary!=='string' || record.summary.length>500 || !['personal-account','record','independently-verified'].includes(record.sourceStatus) || !Number.isFinite(Date.parse(record.reviewedAt))) throw new Error('Invalid public record');
  return Object.freeze({...record});
}
