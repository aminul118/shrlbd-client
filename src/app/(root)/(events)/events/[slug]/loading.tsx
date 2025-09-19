import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';

const EventDetailsLoading = () => {
  return (
    <Container className="space-y-6">
      {/* Photos Grid Skeleton */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="h-48 w-full rounded-lg xl:h-70" />
        ))}
      </div>

      {/* Event Title Skeleton */}
      <div className="mt-4 space-y-2">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
      </div>

      {/* Event Content Skeleton */}
      <div className="mt-14 space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-5 w-full" />
        ))}
      </div>
    </Container>
  );
};

export default EventDetailsLoading;
