import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';

import TeamMembersTable from '@/components/modules/Admin/team/TeamMembersTable';
import { Button } from '@/components/ui/button';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getTeamMembers } from '@/services/team/team-member';
import { SearchParams } from '@/types';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
const TeamMembersPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getTeamMembers(params);

  return (
    <>
      <ClientTableWrapper
        tableTitle="All Team Members"
        meta={meta}
        action={
          <Button asChild>
            <Link href="/admin/add-team-member">
              <Plus />
              Add Team Member
            </Link>
          </Button>
        }
      >
        <TableFilters />
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
