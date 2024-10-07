import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  stdin
    .pipe(
      new Transform({
        transform(data, encoding, callback) {
          callback(null, `${data}`.trim().split('').reverse().join('') + '\n');
        },
      })
    )
    .pipe(stdout);
};

await transform();
