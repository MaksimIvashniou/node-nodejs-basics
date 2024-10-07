import { readFile } from 'fs/promises';
import path from 'path';

const read = async () => {
  const dirPath = path.resolve(import.meta.dirname, 'files');

  try {
    await readFile(path.resolve(dirPath, 'fileToRead.txt'), {
      encoding: 'utf8',
    })
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        throw new Error();
      });
  } catch (error) {
    console.error('FS operation failed');
  }
};

await read();
