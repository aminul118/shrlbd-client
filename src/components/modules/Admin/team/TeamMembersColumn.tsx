import DateFormat from '@/components/common/date-format';
import PlaceHolderImage from '@/components/common/PlaceHolderImage';
import { Column } from '@/components/common/table/TableManageMent';
import { ITeamMember } from '@/types';
import Image from 'next/image';
import TeamMemberActions from './TeamMemberActions';

const TeamMembersColumn: Column<ITeamMember>[] = [
  {
    header: 'SI',
    accessor: (_, i) => i + 1,
  },
  {
    header: 'Photo',
    accessor: (m) =>
      m.photo ? (
        <Image
          src={m.photo}
          alt={m.name}
          width={50}
          height={50}
          className="rounded-full"
        />
      ) : (
        <PlaceHolderImage />
      ),
  },
  {
    header: 'Designation',
    accessor: (m) => m.shrlDesignation,
  },
  {
    header: 'Phone',
    accessor: (m) => (m.phone ? m.phone : 'N/A'),
  },
  {
    header: 'Date & Time',
    accessor: (m) => <DateFormat date={m.createdAt} />,
  },
  {
    header: 'Actions',
    accessor: (m) => <TeamMemberActions member={m} />,
  },
];

export default TeamMembersColumn;
