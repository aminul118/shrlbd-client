import DateFormat from '@/components/common/DateFormat';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { IEvent } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const EventCard = ({ event }: { event: IEvent }) => {
  return (
    <>
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
    </>
  );
};

export default EventCard;
