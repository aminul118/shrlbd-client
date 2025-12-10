'use client';

import NotFound from '@/components/common/error/NotFound';
import CardSkeleton from '@/components/common/loader/CardSkeleton';
import { Card } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import { useGetUpcomingEventsQuery } from '@/redux/features/upcoming-event/upcomingEvent.api';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import TypeWriterHeading from './TypeWritterHeading';

const UpcomingEvents = () => {
  const { data, isLoading } = useGetUpcomingEventsQuery({});
  const events = data?.data || [];
  if (isLoading) {
    return <CardSkeleton count={6} />;
  }

  return (
    <Container>
      {events.length === 0 ? (
        <>
          <NotFound title="Upcoming Events Not Found" />
        </>
      ) : (
        <div>
          <TypeWriterHeading />
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
            {events?.map((event) => {
              const formattedDate = format(new Date(event.date), 'dd MMM yyyy');

              return (
                <Link key={event._id} href={`/upcoming-events/${event.slug}`}>
                  <Card className="overflow-hidden rounded-xl py-0 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                    <div>
                      <Image
                        src={event.photo}
                        alt={event.title}
                        height={400}
                        width={400}
                        className="w-full object-cover"
                      />
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
};

export default UpcomingEvents;
