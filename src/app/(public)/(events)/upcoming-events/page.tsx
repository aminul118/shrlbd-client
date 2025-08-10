import ScrollingText from '@/components/modules/UpcomingEvents/ScrollingText';
import TypeWriterHeading from '@/components/modules/UpcomingEvents/TypeWritterHeading';
import UpcomingEvents from '@/components/modules/UpcomingEvents/UpcomingEvents';
import { generateMetaTags } from '@/Seo/genarateMetaTags';
import { Metadata } from 'next';

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Upcoming Events | Smart Healthcare and Research Ltd. (SHRL)',
  description:
    'Stay updated with the latest upcoming events organized by Smart Healthcare and Research Ltd. (SHRL), including workshops, seminars, and public health campaigns aimed at improving healthcare in Bangladesh.',
  keywords:
    'SHRL upcoming events, healthcare workshops Bangladesh, SHRL seminars, public health events, medical events Bangladesh, maternal health programs, child health awareness, SHRL community events, healthcare innovation events, SHRL training sessions, digital health campaigns',
  image: '/seo/shrl-hero-ss.png',
  path: 'upcoming-events',
});
// --> SEO End

const UpcomingEventPage = () => {
  return (
    <>
      <TypeWriterHeading />
      <ScrollingText />
      <UpcomingEvents />
    </>
  );
};

export default UpcomingEventPage;
