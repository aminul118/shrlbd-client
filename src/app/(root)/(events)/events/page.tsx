import Events from '@/components/modules/Events/Events';
import generateMetaTags from '@/seo/generateMetaTags';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

const EventPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;

  return <Events props={resolvedSearchparams} />;
};

export default EventPage;

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Events | Smart Healthcare and Research Ltd. (SHRL)',
  description:
    'Stay updated with the latest upcoming events organized by Smart Healthcare and Research Ltd. (SHRL), including workshops, seminars, and public health campaigns aimed at improving healthcare in Bangladesh.',
  keywords:
    'SHRL upcoming events, healthcare workshops Bangladesh, SHRL seminars, public health events, medical events Bangladesh, maternal health programs, child health awareness, SHRL community events, healthcare innovation events, SHRL training sessions, digital health campaigns',
  image: '/seo/shrl-hero-ss.png',
  websitePath: 'upcoming-events',
});
// --> SEO End
