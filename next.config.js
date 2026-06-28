/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  experimental: {
    serverActions: {
      allowedOrigins: ['*'],
    },
  },
};

module.exports = nextConfig;
