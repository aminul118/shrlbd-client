'use client';

import ManagementTable from '@/components/common/table/ManageMentTable';
import { IUser } from '@/types/api.types';
import UsersColum from './UsersColum';

const UsersTable = ({ users }: { users: IUser[] }) => {
  return (
    <ManagementTable
      columns={UsersColum}
      data={users}
      getRowKey={(u) => u._id}
    />
  );
};

export default UsersTable;
