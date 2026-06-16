/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        // Permanently redirect the old *.vercel.app deployment URLs to the
        // canonical custom domain so search engines / LLMs consolidate on it.
        source: '/:path*',
        has: [{ type: 'host', value: '.*\\.vercel\\.app' }],
        destination: 'https://michaelwiryaseputra.com/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cloud.google.com',
      },
      {
        protocol: 'https',
        hostname: 'www.docker.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
}

module.exports = nextConfig 