import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
    serverActions: {
      bodySizeLimit: '10mb', // increase limit (you can use 20mb if needed)
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        search: '',
      },
    ],
  },

  // Enable source maps in production
  productionBrowserSourceMaps: true,
};

export default nextConfig;
