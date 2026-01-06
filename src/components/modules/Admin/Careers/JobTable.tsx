'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { IJob } from '@/types';
import JobColumn from './JobColumn';

const JobTable = ({ jobs }: Props) => {
  return (
    <>
      <TableManageMent
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
