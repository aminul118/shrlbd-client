import DateFormat from '@/components/common/date-format';
import { Column } from '@/components/common/table/TableManageMent';
import { IJob } from '@/types';
import JobActions from './JobActions';

const JobColumn: Column<IJob>[] = [
  {
    header: 'SI',
    accessor: (_, i) => i + 1,
  },
  {
    header: 'Title',
    accessor: (j) => j.title,
  },
  {
    header: 'Date & Time',
    accessor: (j) => <DateFormat date={j.createdAt} />,
  },
  {
    header: 'Actions',
    accessor: (j) => <JobActions job={j} />,
  },
];

export default JobColumn;
