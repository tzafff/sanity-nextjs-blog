/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["ipfs.io", "cdn.sanity.io"],
  },
};

export default nextConfig;
