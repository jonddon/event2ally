/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  experimental: {
    images: { allowFutureImage: true },
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
