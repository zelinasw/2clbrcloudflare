/** @type {import('next').NextConfig} */
const nextConfig = {
  // Versi Next.js 15 lebih suka runtime didefinisikan di level halaman, 
  // tapi kalau mau global di sini saja:
  experimental: {
    // Kosongkan saja kalau tidak yakin, Next.js 15 sudah pintar
  }
};

module.exports = nextConfig;
