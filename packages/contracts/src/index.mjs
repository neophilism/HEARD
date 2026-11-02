/** Public API data must be an intentional derivative with bounded provenance. */
export function assertPublicRecord(record) {
  if (!record || typeof record !== 'object' || Array.isArray(record)) throw new TypeError('Invalid public record');
  const prototype=Object.getPrototypeOf(record);
  if (prototype!==Object.prototype && prototype!==null) throw new TypeError('Expected a plain public record');
  const keys=Reflect.ownKeys(record);
  const allowed=new Set(['id','kind','title','summary','sourceStatus','reviewedAt']);
  if (keys.some(key=>typeof key!=='string' || !allowed.has(key))) throw new Error('Unapproved public field');
  if (keys.length!==allowed.size) throw new Error('Missing public field');
  const descriptors=Object.getOwnPropertyDescriptors(record);
  if (Object.values(descriptors).some(value=>!Object.hasOwn(value,'value'))) throw new TypeError('Accessor public fields are not allowed');
  if (typeof record.id!=='string' || !/^[A-Za-z0-9_-]{1,128}$/.test(record.id)) throw new Error('Invalid id');
  if (!['rights-guide','story'].includes(record.kind) || typeof record.title!=='string' || !record.title.trim() || record.title.length>200 || typeof record.summary!=='string' || !record.summary.trim() || record.summary.length>500 || !['personal-account','record','independently-verified'].includes(record.sourceStatus)) throw new Error('Invalid public record');
  // UTC timestamps only; Date.parse alone accepts nonstandard and rolled dates.
  if (typeof record.reviewedAt!=='string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(record.reviewedAt)) throw new Error('Invalid review timestamp');
  const parsed=Date.parse(record.reviewedAt);
  if (!Number.isFinite(parsed) || new Date(parsed).toISOString()!==record.reviewedAt.replace(/(?<=:\d{2})Z$/,'.000Z')) throw new Error('Invalid review timestamp');
  return Object.freeze({...record});
}

