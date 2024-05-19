/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cos.codefe.top'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tts',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
