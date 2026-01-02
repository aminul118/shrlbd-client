import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import TeamFilters from '@/components/modules/Admin/team/TeamFilters';
import TeamMembersTable from '@/components/modules/Admin/team/TeamMembersTable';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getTeamMembers } from '@/services/team/team-member';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const TeamMembersPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getTeamMembers(params);

  return (
    <>
      <ClientTableWrapper
        tableTitle="All Team Members"
        meta={meta}
        filters={<TeamFilters />}
      >
        <TeamMembersTable members={data} />
      </ClientTableWrapper>
    </>
  );
};

export default TeamMembersPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Team Members | SHRL',
};
// >> SEO End
