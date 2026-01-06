import DateFormat from '@/components/common/date-format';
import { Column } from '@/components/common/table/TableManageMent';
import { ITeamJoinRequest } from '@/types';
import JoinTeamActions from './JoinTeamActions';

const JoinTeamColumn: Column<ITeamJoinRequest>[] = [
  {
    header: 'SI',
    accessor: (_, i) => i + 1,
  },
  {
    header: 'Name',
    accessor: (t) => t.name,
  },
  {
    header: 'Email',
    accessor: (t) => t.email,
  },
  {
    header: 'Phone',
    accessor: (t) => t.phone,
  },
  {
    header: 'Occupation',
    accessor: (t) => t.occupation,
  },
  {
    header: ' Request Date & Time',
    accessor: (t) => <DateFormat date={t.createdAt} />,
  },
  {
    header: 'Actions',
    accessor: (t) => <JoinTeamActions team={t} />,
  },
];

export default JoinTeamColumn;
