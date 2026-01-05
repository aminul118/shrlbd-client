import DateFormat from '@/components/common/date-format';
import PlaceHolderImage from '@/components/common/PlaceHolderImage';
import { Column } from '@/components/common/table/ManageMentTable';
import { IEvent } from '@/types';
import Image from 'next/image';
import EventActions from './EventActions';

const PreviousEventColumn: Column<IEvent>[] = [
  {
    header: 'SI',
    accessor: (_, i) => i + 1,
  },
  {
    header: 'Photo',
    accessor: (e) => {
      const photo = e.photos?.[0];

      return photo ? (
        <Image
          src={photo}
          alt={e.title}
          width={48}
          height={48}
          className="h-12 w-12 rounded-md object-cover"
        />
      ) : (
        <PlaceHolderImage />
      );
    },
  },
  {
    header: 'Title',
    accessor: (e) => e.title,
  },
  {
    header: 'Date & Time',
    accessor: (e) => <DateFormat date={e.createdAt} />,
  },
  {
    header: 'Actions',
    accessor: (e) => <EventActions event={e} />,
  },
];

export default PreviousEventColumn;
