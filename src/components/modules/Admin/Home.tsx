'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from '@/components/ui/card';
import GradientTitle from '@/components/ui/gradientTitle';
import { useUserInfoQuery } from '@/redux/features/auth/auth.api';
import { useGetAdminStatsQuery } from '@/redux/features/stats/stats.api';
import HomePageSkeleton from './HomePageSkeleton';

const Home = () => {
  const { data, isLoading } = useGetAdminStatsQuery(undefined);
  const { data: userData, isLoading: userLoading } =
    useUserInfoQuery(undefined);

  if (isLoading || userLoading) {
    return <HomePageSkeleton />;
  }

  const user = userData?.data;

  return (
    <section className="container mx-auto">
      <GradientTitle title={`Welcome ${user?.fullName}`} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data?.data?.map((stats: any, idx: number) => {
          return (
            <Card
              key={idx}
              className="rounded-2xl shadow-md transition-all duration-200 hover:shadow-xl"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-lg font-semibold">{stats?.name}</h1>
                <p className="mt-2 text-3xl font-bold text-blue-600">
                  {stats?.value}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
