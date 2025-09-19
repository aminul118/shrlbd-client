import HtmlContent from '@/components/ui/HtmlContent';
import api from '@/lib/api';
import DateFormat from '@/utils/dateFormat';
import Image from 'next/image';

const EventDetails = async ({ slug }: { slug: string }) => {
  const { data } = await api.event.getSingleEvent(slug);
  const photos = data.photos || [];
  const { title, content, createdAt } = data;

  return (
    <div>
      {/* Photos Grid */}
      {photos.length > 0 && (
        <div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {photos?.map((photo, index) => (
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
    </div>
  );
};

export default EventDetails;
