import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';
import { type NextRequest, NextResponse } from 'next/server'
import { z } from 'zod';
import { convertToWebStream, fileToReadableStream } from '@/utils/stream-processor';
import path from 'path';

// https://dev.to/bsorrentino/how-to-stream-data-over-http-using-nextjs-1kmb
// stream: https://nodesource.com/blog/understanding-streams-in-nodejs/
const TTSObject = z.object({
  voice: z.string(),
  text: z.string().min(1).max(999),
})

const tts = new MsEdgeTTS();
const rootPath = path.resolve(process.cwd());

console.log('init tts apis')

export async function POST(req: NextRequest) {

  try {
    const data = await req.json();
    const { text, voice } = TTSObject.parse(data)
    // const ttStream = await fileToReadableStream(await ttsFile(text, voice));
    const readable = await ttsStream(text, voice);
    const ttStream = convertToWebStream(readable);
    const res = new Response(ttStream, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

// WEBM_24KHZ_16BIT_MONO_OPUS 这个有坑,困扰了我至少3-4h
async function ttsFile(text: string, langModel: string = "en-US-AriaNeural") {
  await tts.setMetadata(langModel, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  let time = new Date().getTime();
  const filePath = await tts.toFile(`${rootPath}/public/tts_audios/${time}.mp3`, text);
  console.log(filePath);
  return filePath;
}
async function ttsStream(text: string, langModel: string = "en-US-AriaNeural") {
  await tts.setMetadata(langModel, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  const readable = tts.toStream(text);
  return readable;
}
