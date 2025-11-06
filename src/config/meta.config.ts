import { MetaConfig } from '@/types';

const metaConfig: MetaConfig = {
  baseUrl: 'https://www.shrlbd.com',
  baseImage: '/seo/shrl-hero-ss.png',
  siteName: 'SHRL',
  category: 'Health',
  applicationName: 'Smart Healthcare and Research Limited',
  authors_name: 'Dr Fatema Ashraf',
  authorPortfolio: 'https://www.shrlbd.com/team/professor-dr-fatema-ashraf',
  twitter_site: '@shrl',
  facebook_app_id: '580317868506376',
  bookmarks: 'https://www.shrlbd.com/logo.png',
  verification: {
    google: 'CXHQt0k3k1w8s7-XJeEvKbzn1oqM7iMWE7nglQl_6k4',
    microsoft_bing: 'EE37CB89A12B6DB168EE052A7D138295',
  },
  publisher: 'https://www.aminuldev.site',
  preventCrawler: ['/dashboard', '/admin'],
};

export default metaConfig;
