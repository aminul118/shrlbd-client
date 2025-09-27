import { Skeleton } from '@/components/ui/skeleton';

const HomePageSkeleton = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(8)].map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center rounded-2xl p-6 text-center shadow-md"
          >
            <Skeleton className="mb-4 h-24 w-48" /> {/* Title */}
            <Skeleton className="h-10 w-24" /> {/* Value */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePageSkeleton;
