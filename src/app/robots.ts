import metaConfig from '@/config/meta.config';
import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  const { preventCrawler, baseUrl } = metaConfig;
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: preventCrawler,
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/'],
        disallow: preventCrawler,
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
  };
};

export default robots;
