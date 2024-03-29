/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: { allowFutureImage: true },
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
