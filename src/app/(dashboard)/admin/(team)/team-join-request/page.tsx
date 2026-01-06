import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import TeamJoinRequest from '@/components/modules/Admin/join-team/TeamJoinRequestTable';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getJoinMembers } from '@/services/team/team-join';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const TeamJoinRequestPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getJoinMembers(params);

  return (
    <ClientTableWrapper tableTitle="Team Join Requests" meta={meta}>
      <TableFilters />
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
