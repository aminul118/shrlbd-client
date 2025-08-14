import EventDetails from '@/components/modules/Event/EventDetails';
import EventDetailsSkeleton from '@/components/modules/Event/EventDetailsSkeleton';
import { IParams } from '@/types';
import { Suspense } from 'react';

const EventDetailsPage = async ({ params }: IParams) => {
  const { slug } = await params;

  return (
    <div className="container mx-auto py-8 space-y-6">
      <Suspense fallback={<EventDetailsSkeleton />}>
        <EventDetails slug={slug} />
      </Suspense>
    </div>
  );
};

export default EventDetailsPage;
