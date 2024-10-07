import { createWriteStream } from 'fs';
import path from 'path';
import { stdin } from 'process';

const write = async () => {
  const filePath = path.resolve(
    import.meta.dirname,
    'files',
    'fileToWrite.txt'
  );

  const stream = createWriteStream(filePath, 'utf-8');
  stdin.on('data', (data) => {
    stream.write(data);
  });
};

await write();
