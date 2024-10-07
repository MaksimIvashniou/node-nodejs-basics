import { cp, readdir } from 'fs/promises';
import path from 'path';

const copy = async () => {
  const [target, copy] = ['files', 'files_copy'];

  try {
    await readdir(import.meta.dirname).then((list) => {
      if (!list.includes(target) || list.includes(copy)) throw new Error();
    });

    await cp(
      path.resolve(import.meta.dirname, target),
      path.resolve(import.meta.dirname, copy),
      { recursive: true }
    ).catch(() => {
      throw new Error();
    });
  } catch (error) {
    console.error('FS operation failed');
  }
};

await copy();
