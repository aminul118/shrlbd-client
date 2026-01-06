import DateFormat from '@/components/common/date-format';
import { Column } from '@/components/common/table/TableManageMent';
import { IScrollingText } from '@/types';
import ScrollingTextActions from './ScrollingTextActions';

export const ScrollingTextColumns: Column<IScrollingText>[] = [
  {
    header: 'SI',
    accessor: (_, i) => i + 1,
  },
  {
    header: 'Scrolling Text',
    accessor: (sc) =>
      sc.text.length > 80 ? `${sc.text.slice(0, 80)}....` : sc.text,
  },
  {
    header: 'Date  Time',
    accessor: (sc) => <DateFormat date={sc.createdAt} />,
  },
  {
    header: 'Actions',
    accessor: (sc) => <ScrollingTextActions text={sc} />,
  },
];
