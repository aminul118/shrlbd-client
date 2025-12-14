import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import TeamJoinFilters from '@/components/modules/Admin/join-team/TeamJoinFilters';
import TeamJoinRequest from '@/components/modules/Admin/join-team/TeamJoinRequestTable';
import Container from '@/components/ui/Container';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getJoinMembers } from '@/services/team/team-join';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const TeamJoinRequestPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getJoinMembers(params);

  return (
    <Container>
      <ClientTableWrapper
        tableTitle="Team Join Requests"
        filters={<TeamJoinFilters />}
        meta={meta}
      >
        <TeamJoinRequest teams={data} />
      </ClientTableWrapper>
    </Container>
  );
};

export default TeamJoinRequestPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Team Join Requests | SHRL',
};
// >> SEO End
