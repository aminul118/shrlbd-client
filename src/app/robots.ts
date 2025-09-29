import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/user', '/admin'],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/'],
        disallow: ['/user', '/admin'],
      },
    ],
    sitemap: ['https://www.shrlbd.com/sitemap.xml'],
  };
};

export default robots;
