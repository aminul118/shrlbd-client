import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';

const UpcomingEventDetailsPageLoading = () => {
  return (
    <Container>
      <Skeleton className="mx-auto mb-4 h-8 w-md" />
      <Skeleton className="mx-auto mb-12 h-10" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-12">
        {Array.from({ length: 2 }).map((_, i) => (
          <Card key={i} className="animate-pulse overflow-hidden pt-0">
            {/* Image Skeleton */}
            <Skeleton className="h-96 w-full xl:h-70" />

            {/* Card Content Skeleton */}
            <CardContent>
              <CardTitle>
                <Skeleton className="mb-2 h-5 w-3/4" />
              </CardTitle>
              <Skeleton className="h-3 w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default UpcomingEventDetailsPageLoading;
