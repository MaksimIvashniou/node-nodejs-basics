import { readdir } from 'fs/promises';
import path from 'path';

const list = async () => {
  const dirPath = path.resolve(import.meta.dirname, 'files');

  try {
    await readdir(dirPath)
      .then((list) => {
        list.forEach((file) => {
          console.log(file);
        });
      })
      .catch(() => {
        throw new Error();
      });
  } catch (error) {
    console.error('FS operation failed');
  }
};

await list();
