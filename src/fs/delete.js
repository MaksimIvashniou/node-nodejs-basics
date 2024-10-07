import { rm } from 'fs/promises';
import path from 'path';

const remove = async () => {
  const dirPath = path.resolve(import.meta.dirname, 'files');
  try {
    await rm(path.resolve(dirPath, 'fileToRemove.txt')).catch(() => {
      throw new Error();
    });
  } catch (error) {
    console.error('FS operation failed');
  }
};

await remove();
