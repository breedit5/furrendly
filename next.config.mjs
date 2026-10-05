/** @type {import('next').NextConfig} */
const MARKETPLACE_ORIGIN =
  process.env.MARKETPLACE_ORIGIN || 'https://REPLACE_WITH_MARKETPLACE_VERCEL_URL.vercel.app'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/marketplace',
        destination: `${MARKETPLACE_ORIGIN}/marketplace`,
      },
      {
        source: '/marketplace/:path*',
        destination: `${MARKETPLACE_ORIGIN}/marketplace/:path*`,
      },
    ]
  },
}

export default nextConfig
