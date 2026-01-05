import PlaceHolderImage from '@/components/common/PlaceHolderImage';
import { Column } from '@/components/common/table/ManageMentTable';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IUpcomingEvent } from '@/types';

import DateFormat from '@/components/common/date-format';
import UpcomingEventActions from './UpcomingEventActions';

const UpcomingEventsColumn: Column<IUpcomingEvent>[] = [
  {
    header: 'SI',
    accessor: (_, i) => i + 1,
  },
  {
    header: 'Photo',
    accessor: (e) =>
      e.photo ? (
        <Avatar className="h-10 w-10">
          <AvatarImage src={e.photo} alt={e.title} />
          <AvatarFallback>{e.title?.charAt(0)}</AvatarFallback>
        </Avatar>
      ) : (
        <PlaceHolderImage />
      ),
  },
  {
    header: 'Title',
    accessor: (e) => e.title,
  },
  {
    header: 'Date',
    accessor: (e) => <DateFormat date={e.date} />,
  },
  {
    header: 'Time',
    accessor: (e) => e.time,
  },
  {
    header: 'Actions',
    accessor: (e) => <UpcomingEventActions event={e} />,
  },
];

export default UpcomingEventsColumn;
