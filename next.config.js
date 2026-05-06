/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pakai runtime edge biar sinkron sama Cloudflare
  experimental: {
    runtime: 'edge',
  },
};

module.exports = nextConfig;
