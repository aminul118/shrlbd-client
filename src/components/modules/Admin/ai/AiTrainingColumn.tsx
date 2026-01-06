import DateFormat from '@/components/common/date-format';
import { Column } from '@/components/common/table/TableManageMent';
import { IAiTraining } from '@/types';
import AiTrainingActions from './AiTrainingActions';

const AiTrainingColumn: Column<IAiTraining>[] = [
  {
    header: 'SI',
    accessor: (_, i) => i + 1,
  },
  {
    header: 'Question',
    accessor: (a) => a.question,
  },
  {
    header: 'Answer',
    accessor: (a) => a.answer,
  },
  {
    header: 'Date & Time',
    accessor: (t) => <DateFormat date={t.createdAt} />,
  },
  {
    header: 'Actions',
    accessor: (a) => <AiTrainingActions payload={a} />,
  },
];

export default AiTrainingColumn;
