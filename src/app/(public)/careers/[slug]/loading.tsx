import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';

const CareerDetailsLoading = () => {
  return (
    <Container>
      {/* Designations Skeleton */}
      <div className="mx-auto mt-2 max-w-xl space-y-2 text-center">
        <Skeleton className="mx-auto h-4 w-56" />
        <Skeleton className="mx-auto h-4 w-48" />
      </div>

      {/* HTML Content Skeleton */}
      <div className="mx-auto mt-16 max-w-4xl space-y-4 rounded-lg px-8 pb-10 md:mt-4 md:p-12">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="h-6 w-2/3" />
      </div>
    </Container>
  );
};

export default CareerDetailsLoading;
