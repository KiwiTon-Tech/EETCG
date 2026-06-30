/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.4.34"],
  // Enable Cloudflare deployment with OpenNext
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", ".eetcg.com"],
    },
  },
};

export default nextConfig;
