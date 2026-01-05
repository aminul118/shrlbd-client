'use client';

import ManagementTable from '@/components/common/table/ManageMentTable';
import { ITeamMember } from '@/types';
import TeamMembersColumn from './TeamMembersColumn';

interface Props {
  members: ITeamMember[];
}

const TeamMembersTable = ({ members }: Props) => {
  return (
    <>
      <ManagementTable
        columns={TeamMembersColumn}
        data={members}
        getRowKey={(m) => m._id}
      />
    </>
  );
};

export default TeamMembersTable;
