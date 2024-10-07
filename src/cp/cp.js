import { spawn } from 'child_process';
import { stdin, stdout } from 'process';
import path from 'path';

const childPath = path.resolve(import.meta.dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = spawn('node', [childPath, ...args]);
  stdin.pipe(child.stdin);
  child.stdout.pipe(stdout);
};

spawnChildProcess(['test1', 'test2', 'test3']);
