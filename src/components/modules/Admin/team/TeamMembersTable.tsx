'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { ITeamMember } from '@/types';
import TeamMembersColumn from './TeamMembersColumn';

interface Props {
  members: ITeamMember[];
}

const TeamMembersTable = ({ members }: Props) => {
  return (
    <>
      <TableManageMent
        columns={TeamMembersColumn}
        data={members}
        getRowKey={(m) => m._id}
      />
    </>
  );
};

export default TeamMembersTable;
