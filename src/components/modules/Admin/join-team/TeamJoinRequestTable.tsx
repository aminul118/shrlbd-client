'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { ITeamJoinRequest } from '@/types/api.types';
import JoinTeamColumn from './JoinTeamColumn';

const TeamJoinRequest = ({ teams }: { teams: ITeamJoinRequest[] }) => {
  return (
    <>
      <TableManageMent
        columns={JoinTeamColumn}
        data={teams}
        getRowKey={(t) => t._id}
      />
    </>
  );
};

export default TeamJoinRequest;
