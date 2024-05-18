import { Readable } from 'stream';

const generator = async function* () {
  // yield 1;
  // yield 2;
  // yield 3;
  for (let i = 0; i < 100; i++) {
    yield i;
    //sleep 100ms
    await sleep(100);
  }
};

export async function main() {
  const myReadableStream = Readable.from(generator());
  myReadableStream.on('data', (data) => console.log(data));
}

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// main().catch((err) => {
//     console.error(
//         'An error occurred while attempting to seed the database:',
//         err,
//     );
// });