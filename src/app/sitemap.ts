import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://example.com",
      lastModified: "2021-01-01",
      changeFrequency: "weekly",
      priority: 0.5,
      images: ["https://example.com/image.jpg"],
    },
  ];
};
export default sitemap;
