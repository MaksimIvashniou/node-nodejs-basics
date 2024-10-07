import { createReadStream } from 'fs';
import path from 'path';
import { stdout } from 'process';

const read = async () => {
  const filePath = path.resolve(import.meta.dirname, 'files', 'fileToRead.txt');
  let data = '';
  createReadStream(filePath, 'utf-8')
    .on('data', (chunk) => {
      data += chunk;
    })
    .on('end', () => {
      stdout.write(data + '\n');
    });
};

await read();
