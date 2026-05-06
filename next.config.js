/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare butuh ini agar bisa menjalankan fungsi serverless
  runtime: 'edge', 
};

module.exports = nextConfig;
