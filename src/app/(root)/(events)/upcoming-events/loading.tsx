import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, Clock, MapPinCheck } from 'lucide-react';

const UpcomingEventDetailsPageLoading = () => {
  return (
    <Container>
      {/* Title */}
      <Skeleton className="mb-3 h-8 w-3/4" />

      {/* Event info (date, time, venue) */}
      <div className="mb-4 flex flex-col gap-2 text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-gray-400" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-gray-400" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex items-center gap-2">
          <MapPinCheck size={18} className="text-gray-400" />
          <Skeleton className="h-4 w-48" />
        </div>
      </div>

      {/* Event details (HTML content placeholder) */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-10/12" />
        <Skeleton className="h-4 w-9/12" />
        <Skeleton className="h-4 w-8/12" />
      </div>
    </Container>
  );
};

export default UpcomingEventDetailsPageLoading;
