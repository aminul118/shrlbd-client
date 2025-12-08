import { Card, CardContent } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';

const TeamLoadingPage = () => {
  return (
    <Container
      className="grid grid-cols-1 gap-8 lg:grid-cols-2 2xl:grid-cols-3"
      aria-busy="true"
      aria-label="Loading team members"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <Card
          key={i}
          className="relative mt-12 h-[400px] w-full rounded-2xl border-0 from-cyan-50 to-blue-200 shadow-lg dark:from-slate-950 dark:to-slate-900"
        >
          {/* Floating avatar */}
          <div className="absolute inset-x-0 -top-12 z-50 flex justify-center">
            <Skeleton className="size-24 rounded-full ring-2 ring-[#808BAF]/60" />
          </div>

          <CardContent className="px-5 pt-16 pb-5">
            {/* Name */}
            <div className="flex justify-center">
              <Skeleton className="h-5 w-40" />
            </div>

            {/* Designations / Lines of text */}
            <div className="mt-4 space-y-2">
              <Skeleton className="mx-auto h-4 w-56" />
              <Skeleton className="mx-auto h-4 w-48" />
              <Skeleton className="mx-auto h-4 w-60" />
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

export default TeamLoadingPage;
