/**
 * From https://github.com/MattMorgis/async-stream-generator
 */

import stream from "stream";

// function*   This is an asynchronous generator function
// export async function* nodeStreamToIterator(readable: stream.Readable): AsyncGenerator<any, void, unknown> {
//     // 创建一个Promise以等待流的数据
//     const onData = new Promise<void>((resolve, reject) => {
//         // 监听可读流的 'data' 事件
//         readable.on('data', () => {
//             // 当有数据时，解析Promise
//             resolve();
//         });

//         // 监听可读流的 'error' 事件
//         readable.on('error', (err) => {
//             // 如果发生错误，拒绝Promise
//             reject(err);
//         });

//         // 监听可读流的 'end' 事件
//         readable.on('end', () => {
//             // 当流结束时，也解析Promise
//             resolve();
//         });
//     });

//     // 递归函数，用于处理流中的数据
//     // async function getNextChunk() {
//     //     // 等待流的下一个数据块
//     //     await onData;

//     //     // 从流中读取数据
//     //     const chunk = readable.read();

//     //     // 如果数据块不为空，则使用yield将其提供给调用者
//     //     if (chunk !== null) {
//     //         yield chunk;
//     //         // 递归调用自身以继续处理下一个数据块
//     //         await getNextChunk();
//     //     }
//     // }


//     // 使用循环来等待流中的每个数据块，并使用yield将其提供给调用者
//     // while (true) {
//     //     // 等待流的下一个数据块
//     //     await onData;
//     //     // 从流中读取数据
//     //     const chunk = readable.read();

//     //     // 如果数据块不为空，则使用yield将其提供给调用者
//     //     if (chunk !== null) {
//     //         yield chunk;
//     //     } else {
//     //         // 如果数据块为空，表示流已经读取完毕，结束循环
//     //         break;
//     //     }
//     // }
// }
// Uint8Array
export async function* nodeStreamToIterator(readable: stream.Readable): AsyncGenerator<any, void, unknown> {

  for await (const chunk of readable) {
    yield chunk;
  }
}

/**
 * Taken from Next.js doc
 * https://nextjs.org/docs/app/building-your-application/routing/router-handlers#streaming
 * Itself taken from mozilla doc
 * https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
 * @param {*} iterator
 * @returns {ReadableStream}
 */
export function iteratorToStream(iterator: AsyncGenerator<any, void, unknown>) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(new Uint8Array(value))
      }
    },
  })
}