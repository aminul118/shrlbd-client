import TeamMembersTable from '@/components/modules/Team/TeamMembersTable';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = {
  title: 'Team Members | SHRL',
};
// >> SEO End

const TeamMembersPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;

  return <TeamMembersTable props={resolvedSearchparams} />;
};

export default TeamMembersPage;
