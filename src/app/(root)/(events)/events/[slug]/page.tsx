import Container from '@/components/ui/Container';
import HtmlContent from '@/components/ui/HtmlContent';
import api from '@/lib/api';
import generateMetaTags from '@/Seo/generateMetaTags';
import { IParams } from '@/types';
import DateFormat from '@/utils/dateFormat';
import Image from 'next/image';

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
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {photos.map((photo: string, index: number) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
              >
                <Image
                  src={photo}
                  width={600}
                  height={400}
                  alt={`Photo ${index + 1}`}
                  className="h-48 w-full object-cover xl:h-70"
                />
              </div>
            ))}
          </div>

          {/* Event Title */}
          <div className="mt-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-xs text-gray-500">
              Post Date: <DateFormat date={createdAt} />
            </p>
          </div>

          {/* Event Content */}
          <HtmlContent content={content} className="mt-14" />
        </div>
      )}
    </Container>
  );
};

export default EventDetailsPage;
