import metaConfig from '@/config/meta.config';
import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: metaConfig.protectedCrawlRoutes,
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/'],
        disallow: metaConfig.protectedCrawlRoutes,
      },
    ],
    sitemap: [`${metaConfig.baseUrl}/sitemap.xml`],
  };
};

export default robots;
