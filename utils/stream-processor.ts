import stream from "stream";
import fs from "fs";

export function convertToWebStream(readable: stream.Readable) {
  return makeTTStream(makeGenerator(readable));
}

export async function* makeGenerator(readable: stream.Readable): AsyncGenerator<any, void, unknown> {
  for await (const chunk of readable) {
    yield chunk;
  }
}

export function makeTTStream(generator: AsyncGenerator<any, void, unknown>): ReadableStream<Uint8Array> {
  return new ReadableStream({
    async start(controller) {
      for await (let chunk of generator) {
        controller.enqueue(new Uint8Array(chunk));
      }
      controller.close();
    },

    // async pull(controller) {
    //   const { value, done } = await iterator.next()
    //   if (done) {
    //     controller.close()
    //   } else {
    //     controller.enqueue(new Uint8Array(value))
    //   }
    // },
  })
}

export async function fileToReadableStream(filePath: string) {
  const fileStream = fs.createReadStream(filePath);
  // Create a ReadableStream from the file stream
  const stream = new ReadableStream({
    start(controller) {
      // Read data from the file stream and enqueue it
      fileStream.on('data', (chunk: Uint8Array) => {
        controller.enqueue(chunk);
      });
      // Handle errors
      // fileStream.on('error', (error: Error) => {
      //   controller.error(error);
      // });

      // Close the stream when the file ends
      fileStream.on('end', () => {
        controller.close();
      });
    },
  });

  return stream;
}