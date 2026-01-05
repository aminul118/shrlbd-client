'use client';

import ManagementTable from '@/components/common/table/ManageMentTable';
import { IJob } from '@/types';
import JobColumn from './JobColumn';

const JobTable = ({ jobs }: Props) => {
  return (
    <>
      <ManagementTable
        columns={JobColumn}
        data={jobs}
        getRowKey={(j) => j._id}
        emptyMessage="No Jobs added yet."
      />
    </>
  );
};

export default JobTable;

interface Props {
  jobs: IJob[];
}
