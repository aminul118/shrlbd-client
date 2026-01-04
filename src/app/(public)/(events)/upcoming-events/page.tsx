import ScrollingText from '@/components/modules/Public/upcoming-events/ScrollingText';
import UpcomingEvents from '@/components/modules/Public/upcoming-events/UpcomingEvents';
import generateMetaTags from '@/seo/generateMetaTags';
import { getUpcomingEvents } from '@/services/event/upcoming-event';
import { Metadata } from 'next';

const UpcomingEventPage = async () => {
  const { data } = await getUpcomingEvents();
  return (
    <>
      <ScrollingText />
      <UpcomingEvents events={data} />
    </>
  );
};

export default UpcomingEventPage;

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Upcoming Events | Smart Healthcare and Research Ltd. (SHRL)',
  description:
    'Stay updated with the latest upcoming events organized by Smart Healthcare and Research Ltd. (SHRL), including workshops, seminars, and public health campaigns aimed at improving healthcare in Bangladesh.',
  keywords:
    'SHRL upcoming events, healthcare workshops Bangladesh, SHRL seminars, public health events, medical events Bangladesh, maternal health programs, child health awareness, SHRL community events, healthcare innovation events, SHRL training sessions, digital health campaigns',
  image: '/seo/shrl-hero-ss.png',
  websitePath: 'upcoming-events',
});
// --> SEO End
