import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
      style-src 'self' 'unsafe-inline';
      connect-src 'self' https://www.google-analytics.com;
      img-src 'self' https://www.google-analytics.com data:;
      object-src 'none';
      frame-ancestors 'none';
    `
      .replace(/\s{2,}/g, " ")
      .trim(),
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=()",
  },
];

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

  productionBrowserSourceMaps: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
