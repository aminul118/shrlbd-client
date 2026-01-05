'use client';

import ManagementTable from '@/components/common/table/ManageMentTable';
import { ITeamJoinRequest } from '@/types/api.types';
import JoinTeamColumn from './JoinTeamColumn';

const TeamJoinRequest = ({ teams }: { teams: ITeamJoinRequest[] }) => {
  return (
    <>
      <ManagementTable
        columns={JoinTeamColumn}
        data={teams}
        getRowKey={(t) => t._id}
      />
    </>
  );
};

export default TeamJoinRequest;
