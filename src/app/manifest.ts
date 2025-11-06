import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Smart Healthcare and Research Ltd.',
    short_name: 'SHRLBD',
    description:
      'Smart Healthcare and Research Ltd. offers innovative healthcare solutions for women and children, including online consultations, research, professional training, and community outreach.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    categories: ['health', 'education', 'medical', 'non-profit'],
    lang: 'en',

    icons: [
      {
        src: '/app/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
