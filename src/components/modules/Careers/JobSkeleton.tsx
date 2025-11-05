import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const JobSkeleton = () => {
  return (
    <Card className="flex h-full w-full flex-col justify-between">
      <div>
        <CardHeader>
          <Skeleton className="mb-2 h-6 w-3/4" />
          <div className="mt-3 flex flex-wrap gap-2">
            <Skeleton className="h-5 w-16 rounded-full" />
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-12 rounded-full" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="mt-4 space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
            <Skeleton className="h-3 w-4/6" />
          </div>
        </CardContent>
      </div>

      <div className="p-4 pt-0">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </Card>
  );
};

export default JobSkeleton;
