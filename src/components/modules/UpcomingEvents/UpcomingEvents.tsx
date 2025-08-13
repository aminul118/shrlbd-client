import { Card, CardContent } from '@/components/ui/card';
import getUpcomingEvents from '@/lib/data/getUpcomingEvents';
import Image from 'next/image';
import { format } from 'date-fns';
import { Calendar, Clock, MapPinCheck } from 'lucide-react';

export interface IUpcomingEvent {
  _id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  photo: string;
  details: string;
}

const UpcomingEvents = async () => {
  const events = await getUpcomingEvents();

  if (!events?.data || events.data.length === 0) {
    return (
      <div className="py-16 text-center text-primary text-lg">
        No upcoming events at the moment. Stay tuned!
      </div>
    );
  }

  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.data.map((event: IUpcomingEvent) => {
          const formattedDate = format(new Date(event.date), 'dd MMM yyyy');

          return (
            <Card
              key={event._id}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 md:h-48 w-full">
                <Image src={event.photo} alt={event.title} fill className="object-cover" />
              </div>
              <CardContent className="bg-white p-6">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">{event.title}</h2>
                <div className="flex flex-col gap-2 text-gray-600 mb-4">
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
    </div>
  );
};

export default UpcomingEvents;
