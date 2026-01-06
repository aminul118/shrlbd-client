'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { IAiTraining } from '@/types';
import AiTrainingColumn from './AiTrainingColumn';

const AiTrainingsTable = ({ ais }: { ais: IAiTraining[] }) => {
  return (
    <TableManageMent
      columns={AiTrainingColumn}
      data={ais}
      getRowKey={(a) => a._id}
      emptyMessage="No training data added"
    />
  );
};

export default AiTrainingsTable;
