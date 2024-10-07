import path from 'path';
import { cpus } from 'os';
import { Worker } from 'worker_threads';

const workerPath = path.resolve(import.meta.dirname, 'worker.js');

const performCalculations = async () => {
  const cpuCount = cpus().length;
  const promises = [];

  for (let i = 0; i < cpuCount; i++) {
    promises.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(workerPath);
        worker.postMessage(10 + i);
        worker.on('message', (data) => {
          resolve({
            status: 'resolved',
            data: data,
          });
        });
        worker.on('error', () => {
          reject({
            status: 'error',
            data: null,
          });
        });
      })
    );
  }

  Promise.all(promises).then((result) => {
    console.log(result);
    process.exit();
  });
};

await performCalculations();
