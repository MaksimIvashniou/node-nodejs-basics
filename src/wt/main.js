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

  Promise.allSettled(promises)
    .then((results) => {
      return results.map((result) => result.reason || result.value);
    })
    .then((results) => {
      console.log(results);
      process.exit();
    });
};

await performCalculations();
