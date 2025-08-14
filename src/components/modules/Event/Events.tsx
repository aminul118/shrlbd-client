import { Card, CardContent, CardTitle } from '@/components/ui/card';
import getEvents from '@/lib/data/getEvents';
import DateFormat from '@/components/ui/dateFormat';
import Image from 'next/image';
import Link from 'next/link';

const Events = async () => {
  const res = await getEvents();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {res?.data?.map((event) => (
        <Link key={event._id} href={`/events/${event?.slug}`}>
          <Card className="overflow-hidden pt-0">
            <div className="relative overflow-hidden">
              <Image
                src={event?.photos[0]}
                width={400}
                height={200}
                alt={event.title}
                className="w-full h-48 xl:h-70 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <CardContent className="">
              <CardTitle className="text-lg font-semibold mb-1">{event.title}</CardTitle>
              <p className="text-xs text-gray-500 mb-2">
                Post Date: <DateFormat date={event.createdAt} />
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Events;
