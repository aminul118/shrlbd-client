import { MetaProps } from '@/types';
import { Metadata } from 'next';

const baseUrl = 'https://www.shrlbd.com';

export const generateMetaTags = ({
  title,
  description,
  keywords,
  image = './ss/hero-bg.png',
  path = '',
}: MetaProps): Metadata => {
  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    category: 'Health',
    openGraph: {
      type: 'website',
      url: `${baseUrl}/${path}`,
      title: title,
      description: description,
      siteName: 'SHRL',
      images: [{ url: image, alt: title }],
    },
    robots: { index: true, follow: true },
    twitter: {
      card: 'summary_large_image',
      site: '@shrl',
      creator: '@shrl',
      title,
      description,
      images: image,
    },
    applicationName: 'Smart Healthcare and Research Limited',
    alternates: {
      canonical: `${baseUrl}/${path}`,
      languages: {
        'en-US': `${baseUrl}/en-US`,
      },
    },
    facebook: { appId: '580317868506376' },
    manifest: '/manifest.webmanifest',
    authors: [
      {
        name: 'Smart Healthcare and Research Limited',
        // url: "http://www.shrlbd.com/team/675663806e9379ed3c2a6f99",
      },
    ],
  };
};
