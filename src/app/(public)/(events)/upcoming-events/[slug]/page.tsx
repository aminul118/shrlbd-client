import DateFormat from '@/components/common/date-format';
import Container from '@/components/ui/Container';
import HtmlContent from '@/components/ui/HtmlContent';
import generateMetaTags from '@/seo/generateMetaTags';
import { getSingleUpcomingEvent } from '@/services/event/upcoming-event';

import { IParams } from '@/types';
import { Calendar, Clock, MapPinCheck } from 'lucide-react';
import { notFound } from 'next/navigation';

const UpcomingEventDetails = async ({ params }: IParams) => {
  const { slug } = await params;
  const res = await getSingleUpcomingEvent(slug);
  const event = res.data;

  if (!event) {
    notFound();
  }

  const { title, venue, time, details, date } = event;

  return (
    <Container>
      <h2 className="mb-3 text-2xl font-bold">{title}</h2>
      <div className="mb-4 flex flex-col gap-2 text-gray-600">
        <p className="flex items-center gap-2">
          <Calendar size={18} /> <DateFormat date={date} />
        </p>
        <p className="flex items-center gap-2">
          <Clock size={18} /> {time}
        </p>
        <p className="flex items-center gap-2">
          <MapPinCheck size={18} /> {venue}
        </p>
      </div>
      <HtmlContent content={details} />
    </Container>
  );
};

export default UpcomingEventDetails;

// ---> SEO Starts
export async function generateMetadata({ params }: IParams) {
  const { slug } = await params;
  const { data: event } = await getSingleUpcomingEvent(slug);
  const { title, venue, time, details, photo, date } = event;

  return generateMetaTags({
    title,
    description: details?.replace(/<[^>]*>/g, '').slice(0, 160) || '',
    keywords: `${title} ${venue} , Event`,
    image: photo || '',
    websitePath: `/upcoming-events/${slug}`,
  });
}
// ---> SEO END
