import AppPagination from '@/components/common/pagination/AppPagination';
import EventCard from '@/components/modules/Public/events/EventCard';
import Container from '@/components/ui/Container';
import cleanSearchParams from '@/lib/cleanSearchParams';
import generateMetaTags from '@/seo/generateMetaTags';
import { getEvents } from '@/services/event/event';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

const EventPage = async ({ searchParams }: ISearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data: events, meta } = await getEvents(params);

  return (
    <>
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events?.map((event) => {
            return <EventCard key={event._id} {...event} />;
          })}
        </div>

        {meta && <AppPagination meta={meta} />}
      </Container>
    </>
  );
};

export default EventPage;

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Events | Smart Healthcare and Research Ltd. (SHRL)',
  description:
    'Stay updated with the latest upcoming events organized by Smart Healthcare and Research Ltd. (SHRL), including workshops, seminars, and public health campaigns aimed at improving healthcare in Bangladesh.',
  keywords:
    'SHRL upcoming events, healthcare workshops Bangladesh, SHRL seminars, public health events, medical events Bangladesh, maternal health programs, child health awareness,',
  image: '/seo/shrl-hero-ss.png',
  websitePath: 'upcoming-events',
});
// --> SEO End
