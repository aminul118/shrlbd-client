import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const EventSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="overflow-hidden pt-0 animate-pulse">
          {/* Image Skeleton */}
          <Skeleton className="w-full h-48 xl:h-70" />

          {/* Card Content Skeleton */}
          <CardContent>
            <CardTitle>
              <Skeleton className="h-5 w-3/4 mb-2" />
            </CardTitle>
            <Skeleton className="h-3 w-1/2" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EventSkeleton;
