export type PublicRecord = Readonly<{
  id: string;
  kind: 'rights-guide' | 'story';
  title: string;
  summary: string;
  sourceStatus: 'personal-account' | 'record' | 'independently-verified';
  reviewedAt: string;
}>;
export declare function assertPublicRecord(record: unknown): PublicRecord;
