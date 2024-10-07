import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
  const [sourcePath, targetPath] = [
    path.resolve(import.meta.dirname, 'files', 'fileToCompress.txt'),
    path.resolve(import.meta.dirname, 'files', 'archive.gz'),
  ];

  const readStream = createReadStream(sourcePath, 'utf-8');
  const writeStream = createWriteStream(targetPath);
  const gzip = createGzip();

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
