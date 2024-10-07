import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

const decompress = async () => {
  const [sourcePath, targetPath] = [
    path.resolve(import.meta.dirname, 'files', 'archive.gz'),
    path.resolve(import.meta.dirname, 'files', 'fileToCompress.txt'),
  ];

  const readStream = createReadStream(sourcePath);
  const writeStream = createWriteStream(targetPath);
  const unzip = createUnzip();

  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
