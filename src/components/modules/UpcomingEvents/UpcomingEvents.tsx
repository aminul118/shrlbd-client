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

  return (
    <div className="grid grid-cols-1 gap-8 px-4 py-8 max-w-2xl mx-auto">
      {events?.data.map((event: IUpcomingEvent) => {
        const formattedDate = format(new Date(event.date), 'dd MMM yyyy');
        // You can change the pattern to "MMMM d, yyyy" or any style you like

        return (
          <Card className="p-0 bg-slate-600 text-white" key={event._id}>
            <Image src={event.photo} width={800} height={700} alt={event.title} />
            <CardContent>
              <h1 className="text-2xl font-semibold mb-4"> {event.title},</h1>
              <p className="flex gap-2 items-center">
                <Calendar size={18} /> {formattedDate}
              </p>
              <p className="flex gap-2 items-center">
                <Clock size={18} /> {event.time}
              </p>
              <p className="flex gap-2 items-center">
                <MapPinCheck size={18} /> {event.venue}
              </p>
              <p className="my-4">{event.details}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default UpcomingEvents;
