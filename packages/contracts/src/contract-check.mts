import type {PublicRecord} from './index.mjs';
const good: PublicRecord={id:'guide_1',kind:'rights-guide',title:'Guide',summary:'Reviewed public text',sourceStatus:'record',reviewedAt:'2026-10-18T00:00:00Z'};
void good;
// @ts-expect-error unreviewed source status cannot enter public contract
const badStatus: PublicRecord={id:'guide_1',kind:'rights-guide',title:'Guide',summary:'Text',sourceStatus:'unreviewed',reviewedAt:'2026-10-18T00:00:00Z'};
void badStatus;
