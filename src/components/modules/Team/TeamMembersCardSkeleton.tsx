import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const TeamMembersCardSkeleton = () => {
  return (
    <div className="flex">
      <Card className="shadow-lg rounded-xl p-4 flex flex-col items-center w-full bg-gradient-to-b from-cyan-50 to-blue-200 dark:from-slate-950 dark:to-slate-900 h-full">
        {/* Photo */}
        <div className="flex justify-center -mt-14 mb-4">
          <Skeleton className="w-24 h-24 rounded-full border-2 border-[#808BAF]" />
        </div>

        <CardContent className="text-center w-full flex flex-col flex-grow">
          {/* Name */}
          <Skeleton className="h-5 w-32 mx-auto mb-2" />

          {/* Designations */}
          <div className="flex flex-col mt-4 mb-6 flex-grow space-y-2">
            {[...Array(2)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-40 mx-auto" />
            ))}
          </div>

          {/* Portfolio Button */}
          <div className="mt-auto">
            <Skeleton className="h-9 w-full rounded-lg" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamMembersCardSkeleton;
