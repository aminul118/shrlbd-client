import DateFormat from '@/components/common/date-format';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { IEvent } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const EventCard = ({ _id, createdAt, photos, slug, title }: IEvent) => {
  return (
    <>
      <Link key={_id} href={`/events/${slug}`}>
        <Card className="overflow-hidden pt-0">
          <div className="relative overflow-hidden">
            <Image
              src={photos[0]}
              width={400}
              height={200}
              alt={title}
              className="h-48 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 xl:h-70"
            />
          </div>

          <CardContent>
            <CardTitle className="mb-1 text-lg font-semibold">
              {title}
            </CardTitle>
            <p className="mb-2 text-xs text-gray-500">
              Post Date: <DateFormat date={createdAt} />
            </p>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default EventCard;
