import TeamMembersTable from '@/components/modules/Admin/team/TeamMembersTable';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

const TeamMembersPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;

  return <TeamMembersTable props={resolvedSearchparams} />;
};

export default TeamMembersPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Team Members | SHRL',
};
// >> SEO End
