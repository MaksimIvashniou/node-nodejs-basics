import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';

const calculateHash = async () => {
  const filePath = path.resolve(
    import.meta.dirname,
    'files',
    'fileToCalculateHashFor.txt'
  );
  const hash = createHash('sha256');

  createReadStream(filePath)
    .on('data', (chunk) => hash.update(chunk))
    .on('end', () => {
      console.log(hash.digest('hex'));
    });
};

await calculateHash();
