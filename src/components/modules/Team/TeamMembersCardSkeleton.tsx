import { Card, CardContent } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';

type Props = { count?: number };

const TeamMembersCardSkeleton = ({ count = 8 }: Props) => {
  return (
    <Container
      className="grid grid-cols-1 gap-8 lg:grid-cols-2 2xl:grid-cols-3"
      aria-busy="true"
      aria-label="Loading team members"
    >
      {Array.from({ length: count }).map((_, i) => (
        <Card
          key={i}
          className="relative w-full  rounded-2xl border-0 shadow-lg bg-gradient-to-b from-cyan-50 to-blue-200 dark:from-slate-950 dark:to-slate-900 h-[400px] mt-12"
        >
          {/* Floating avatar */}
          <div className="absolute inset-x-0 -top-12 flex justify-center z-50">
            <Skeleton className="size-24 rounded-full ring-2 ring-[#808BAF]/60" />
          </div>

          <CardContent className="pt-16 pb-5 px-5">
            {/* Name */}
            <div className="flex justify-center">
              <Skeleton className="h-5 w-40" />
            </div>

            {/* Designations / Lines of text */}
            <div className="mt-4 space-y-2">
              <Skeleton className="h-4 w-56 mx-auto" />
              <Skeleton className="h-4 w-48 mx-auto" />
              <Skeleton className="h-4 w-60 mx-auto" />
            </div>

            {/* Spacer so buttons align to bottom at variable heights */}
            <div className="h-6" />

            {/* CTA bar */}
            <Skeleton className="h-9 w-full rounded-lg" />
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default TeamMembersCardSkeleton;
