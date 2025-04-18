import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
      },
      {
        userAgent: "Applebot",
        disallow: ["/"],
      },
      {
        userAgent: "Bingbot",
        disallow: ["/"],
      },
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: "https://shrlbd.com/sitemap.xml",
    host: "https://shrlbd.com",
  };
}
