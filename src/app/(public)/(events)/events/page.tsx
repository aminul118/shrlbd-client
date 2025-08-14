import Events from '@/components/modules/Event/Events';
import EventSkeleton from '@/components/modules/Event/EventSkeleton';
import GrediantHeading from '@/components/ui/GrediantHeading';

import { Suspense } from 'react';

const EventPage = () => {
  return (
    <div className="container mx-auto py-8">
      <GrediantHeading heading="Events" />
      <Suspense fallback={<EventSkeleton />}>
        <Events />
      </Suspense>
    </div>
  );
};

export default EventPage;
