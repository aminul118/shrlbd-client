import { Skeleton } from '@/components/ui/skeleton';

const EventDetailsSkeleton = () => {
  return (
    <div className="container mx-auto py-8 space-y-6">
      {/* Photos Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-48 xl:h-70 rounded-lg" />
        ))}
      </div>

      {/* Event Title Skeleton */}
      <div className="mt-4 space-y-2">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>

      {/* Event Content Skeleton */}
      <div className="mt-6 space-y-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-4 w-full" />
        ))}
      </div>
    </div>
  );
};

export default EventDetailsSkeleton;
