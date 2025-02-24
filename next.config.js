/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/a/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily disable ESLint during build
  },
}

module.exports = nextConfig
