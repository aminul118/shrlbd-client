import TeamMembersTable from '@/components/modules/Admin/teamMembers/TeamMembersTable';
import { ISearchParams } from '@/types';

const TeamMembersPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;

  return <TeamMembersTable props={resolvedSearchparams} />;
};

export default TeamMembersPage;
