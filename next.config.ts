import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
        search: "",
      },
    ],
  },

  // Enable source maps in production
  productionBrowserSourceMaps: true,
};

export default nextConfig;
