import { writeFile } from 'fs/promises';
import path from 'path';

const create = async () => {
  const dirPath = path.resolve(import.meta.dirname, 'files');

  try {
    await writeFile(
      path.resolve(dirPath, 'fresh.txt'),
      'I am fresh and young',
      {
        flag: 'wx',
        encoding: 'utf8',
      }
    ).catch(() => {
      throw new Error();
    });
  } catch (error) {
    console.error('FS operation failed');
  }
};

await create();
