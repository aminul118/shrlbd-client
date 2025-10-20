import NotFound from '@/components/common/error/NotFound';
import { Card, CardContent } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import HtmlContent from '@/components/ui/HtmlContent';
import { getUpcomingEvents } from '@/services/upcoming-event';
import { format } from 'date-fns';
import { Calendar, Clock, MapPinCheck } from 'lucide-react';
import Image from 'next/image';

const UpcomingEvents = async () => {
  const { data } = await getUpcomingEvents();
  console.log(data);

  return (
    <Container className="mx-auto px-4 py-12">
      {data.length === 0 ? (
        <>
          <NotFound title="Upcoming Events Not Found" />
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {data?.map((event) => {
              const formattedDate = format(new Date(event.date), 'dd MMM yyyy');

              return (
                <Card
                  key={event._id}
                  className="overflow-hidden rounded-xl py-0 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                >
                  <div>
                    <Image
                      src={event.photo}
                      alt={event.title}
                      height={400}
                      width={400}
                      className="w-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="mb-3 text-2xl font-bold">{event.title}</h2>
                    <div className="mb-4 flex flex-col gap-2 text-gray-600">
                      <p className="flex items-center gap-2">
                        <Calendar size={18} /> {formattedDate}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock size={18} /> {event.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPinCheck size={18} /> {event.venue}
                      </p>
                    </div>
                    <HtmlContent content={event.details} />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </Container>
  );
};

export default UpcomingEvents;
