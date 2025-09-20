import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailus.io'
      },
      {
        protocol: 'https',
        hostname: 'roastme.ru'
      },
      {
        protocol: 'https',
        hostname: 'mobilenetrix.com'
      }
    ]
  }
};

export default nextConfig;
