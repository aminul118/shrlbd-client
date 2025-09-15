import { Skeleton } from '@/components/ui/skeleton';

const TeamDetailsCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center space-y-6 py-16">
      {/* Profile Image */}
      <Skeleton className="h-32 w-32 rounded-full" />

      {/* Name & Designation */}
      <div className="flex flex-col items-center space-y-2">
        <Skeleton className="h-5 w-48" /> {/* Name */}
        <Skeleton className="h-4 w-32" /> {/* Designation */}
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center space-y-2">
        <Skeleton className="h-4 w-40" /> {/* Email */}
        <Skeleton className="h-4 w-36" /> {/* Phone */}
      </div>

      {/* Position / Roles */}
      <div className="flex flex-col items-center space-y-2">
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-72" />
        <Skeleton className="h-4 w-60" />
      </div>

      {/* Research/Publication Section */}
      <div className="mt-10 w-full max-w-3xl space-y-4">
        <Skeleton className="h-6 w-48" /> {/* Section Title */}
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsCardSkeleton;
