
export function GET() {
  return new Response(
    `I am an NodeJs Function! (executed on ${process.env.VERCEL_REGION})`,
    {
      status: 200,
    },
  );
}
