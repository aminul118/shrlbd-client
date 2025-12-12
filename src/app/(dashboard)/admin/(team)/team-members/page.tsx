import TeamMembersTable from '@/components/modules/Admin/team/TeamMembersTable';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const TeamMembersPage = async ({ searchParams }: SearchParams) => {
  const resolvedSearchparams = await searchParams;

  return <TeamMembersTable props={resolvedSearchparams} />;
};

export default TeamMembersPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Team Members | SHRL',
};
// >> SEO End
