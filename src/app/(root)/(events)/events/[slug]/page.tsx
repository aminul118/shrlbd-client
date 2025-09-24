import api from '@/api';
import DateFormat from '@/components/common/DateFormat';
import EventImageSlider from '@/components/modules/events/EventImageSlider';
import Container from '@/components/ui/Container';
import HtmlContent from '@/components/ui/HtmlContent';
import generateMetaTags from '@/seo/generateMetaTags';
import { IParams } from '@/types';

// ---> SEO Starts
export async function generateMetadata({ params }: IParams) {
  const { slug } = await params;
  const { data: event } = await api.event.getSingleEvent(slug);

  return generateMetaTags({
    title: `${event.title}`,
    description: event.content?.replace(/<[^>]*>/g, '').slice(0, 160) || '',
    keywords: `${event.title}, Event`,
    image: event.photos?.[0] || '',
    websitePath: `/event/${slug}`,
  });
}
// ---> SEO END

const EventDetailsPage = async ({ params }: IParams) => {
  const { slug } = await params;
  const { data: event } = await api.event.getSingleEvent(slug);

  const photos = event.photos || [];

  const { title, content, createdAt } = event;

  return (
    <Container className="space-y-6">
      {/* Photos Grid */}
      {photos.length > 0 && (
        <div>
          {/* Event Title */}
          <div className="mt-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-xs text-gray-500">
              Post Date: <DateFormat date={createdAt} />
            </p>
          </div>

          {/* Event Content */}
          <HtmlContent content={content} className="mt-14" />
          <EventImageSlider images={photos} />
        </div>
      )}
    </Container>
  );
};

export default EventDetailsPage;
