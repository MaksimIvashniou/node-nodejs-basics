import fs from 'fs/promises';
import path from 'path';

const rename = async () => {
  const dirPath = path.resolve(import.meta.dirname, 'files');
  const [common, target] = ['wrongFilename.txt', 'properFilename.md'];

  try {
    await fs.readdir(dirPath).then((list) => {
      if (!list.includes(common) || list.includes(target)) throw new Error();
    });

    await fs
      .rename(path.resolve(dirPath, common), path.resolve(dirPath, target))
      .catch(() => {
        throw new Error();
      });
  } catch (error) {
    console.error('FS operation failed');
  }
};

await rename();
