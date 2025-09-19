import NotFound from '@/components/common/NotFound';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import GrediantHeading from '@/components/ui/GrediantHeading';
import api from '@/lib/api';
import generateMetaTags from '@/Seo/generateMetaTags';
import DateFormat from '@/utils/dateFormat';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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

const EventPage = async () => {
  const { data } = await api.event.getEvents();

  return (
    <Container>
      {data.length === 0 ? (
        <>
          <NotFound title="Events not found" />
        </>
      ) : (
        <>
          <GrediantHeading heading="Events" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data?.map((event) => (
              <Link key={event._id} href={`/events/${event?.slug}`}>
                <Card className="overflow-hidden pt-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={event?.photos[0]}
                      width={400}
                      height={200}
                      alt={event.title}
                      className="h-48 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 xl:h-70"
                    />
                  </div>

                  <CardContent className="">
                    <CardTitle className="mb-1 text-lg font-semibold">
                      {event.title}
                    </CardTitle>
                    <p className="mb-2 text-xs text-gray-500">
                      Post Date: <DateFormat date={event.createdAt} />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default EventPage;
