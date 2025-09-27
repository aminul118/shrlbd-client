import TeamJoinRequest from '@/components/modules/Admin/TeamJoinReguest/TeamJoinRequestTable';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = {
  title: 'Team Join Requests | SHRL',
};
// >> SEO End

const TeamJoinRequestPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;
  return (
    <div>
      <TeamJoinRequest props={resolvedSearchparams} />
    </div>
  );
};

export default TeamJoinRequestPage;
