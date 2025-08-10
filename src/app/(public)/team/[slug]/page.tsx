import TeamDetailsCard from '@/components/modules/Team/TeamDetailsCard';
import TeamDetailsCardSkeleton from '@/components/modules/Team/TeamDetailsCardSkeleton';
import { IParams } from '@/types';
import { Suspense } from 'react';

const TeamDetails = async ({ params }: IParams) => {
  const { slug } = await params;
  return (
    <Suspense fallback={<TeamDetailsCardSkeleton />}>
      <TeamDetailsCard slug={slug} />
    </Suspense>
  );
};

export default TeamDetails;
