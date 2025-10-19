import TeamJoinRequest from '@/components/modules/JoinTeam/TeamJoinRequestTable';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

const TeamJoinRequestPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;
  return (
    <div>
      <TeamJoinRequest props={resolvedSearchparams} />
    </div>
  );
};

export default TeamJoinRequestPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Team Join Requests | SHRL',
};
// >> SEO End
