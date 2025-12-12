import TeamJoinRequest from '@/components/modules/Admin/join-team/TeamJoinRequestTable';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const TeamJoinRequestPage = async ({ searchParams }: SearchParams) => {
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
