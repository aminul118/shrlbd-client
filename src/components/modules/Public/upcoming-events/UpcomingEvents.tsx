import NotFound from '@/components/common/error/NotFound';
import { Card } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import { IUpcomingEvent } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import TypeWriterHeading from './TypeWritterHeading';

const UpcomingEvents = async ({ events }: { events: IUpcomingEvent[] }) => {
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
