import DateFormat from '@/components/ui/dateFormat';
import HtmlContent from '@/components/ui/HtmlContent';
import getEventsById from '@/lib/data/getEventsById';
import Image from 'next/image';

const EventDetails = async ({ slug }: { slug: string }) => {
  const res = await getEventsById(slug);

  const photos = res.data.photos || []; // fix: get the array

  return (
    <div>
      {/* Photos Grid */}
      {photos.length > 0 && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg relative transition-transform duration-500 ease-in-out hover:scale-105"
              >
                <Image
                  src={photo}
                  width={600}
                  height={400}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-48 xl:h-70 object-cover"
                />
              </div>
            ))}
          </div>
          {/* Event Title */}
          <div className="mt-4">
            <h1 className="text-3xl font-bold">{res.data.title}</h1>
            <p className="text-xs text-gray-500">
              Post Date: <DateFormat date={res.data.createdAt} />
            </p>
          </div>

          {/* Event Content */}
          <HtmlContent content={res.data.content} className="mt-14" />
        </div>
      )}
    </div>
  );
};

export default EventDetails;
