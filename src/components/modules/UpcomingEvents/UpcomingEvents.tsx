import NotFound from '@/components/common/NotFound';
import { Card, CardContent } from '@/components/ui/card';
import api from '@/lib/api';
import { format } from 'date-fns';
import { Calendar, Clock, MapPinCheck } from 'lucide-react';
import Image from 'next/image';

const UpcomingEvents = async () => {
  const { data } = await api.upcomingEvent.getUpcomingEvents();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
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
                  className="overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-64 w-full md:h-48">
                    <Image
                      src={event.photo}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="bg-white p-6">
                    <h2 className="mb-3 text-2xl font-semibold text-gray-900">
                      {event.title}
                    </h2>
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
                    <p className="text-gray-700">{event.details}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default UpcomingEvents;
