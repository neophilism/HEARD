const MAX_CHUNK_BYTES=8*1024*1024;
const MAX_OBJECT_BYTES=1024*1024*1024;
export function validateUploadChunk(input){
 if(!input||typeof input!=='object'||input.verifiedOwner!==true||input.quarantinedDestination!==true||
 !Number.isSafeInteger(input.offset)||input.offset<0||!Number.isSafeInteger(input.length)||input.length<=0||input.length>MAX_CHUNK_BYTES||
 !Number.isSafeInteger(input.totalBytes)||input.totalBytes<=0||input.totalBytes>MAX_OBJECT_BYTES||
 input.offset+input.length>input.totalBytes||
 typeof input.expectedSha256!=='string'||! /^[a-f0-9]{64}$/.test(input.expectedSha256))throw new Error('Upload chunk rejected');
 return Object.freeze({offset:input.offset,length:input.length,totalBytes:input.totalBytes,expectedSha256:input.expectedSha256});
}
