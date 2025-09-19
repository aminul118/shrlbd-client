import generateSitemapEntries from '@/Seo/generateSitemapEntries';
import { staticRoutes } from '@/Seo/staticRoutes';
import { MetadataRoute } from 'next';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  return [...generateSitemapEntries(staticRoutes)];
};

export default sitemap;
