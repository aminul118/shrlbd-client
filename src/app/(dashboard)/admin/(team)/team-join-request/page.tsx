import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import TeamJoinFilters from '@/components/modules/Admin/join-team/TeamJoinFilters';
import TeamJoinRequest from '@/components/modules/Admin/join-team/TeamJoinRequestTable';
import { getJoinMembers } from '@/services/team/team-join';
import { SearchParams } from '@/types';
import cleanSearchParams from '@/utils/cleanSearchParams';
import { Metadata } from 'next';

const TeamJoinRequestPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getJoinMembers(params);

  return (
    <ClientTableWrapper
      tableTitle="Team Join Requests"
      filters={<TeamJoinFilters />}
      meta={meta}
    >
      <TeamJoinRequest teams={data} />
    </ClientTableWrapper>
  );
};

export default TeamJoinRequestPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Team Join Requests | SHRL',
};
// >> SEO End
