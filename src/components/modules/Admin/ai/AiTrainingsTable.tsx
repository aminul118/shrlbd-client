'use client';

import ManagementTable from '@/components/common/table/ManageMentTable';
import { IAiTraining } from '@/types';
import AiTrainingColumn from './AiTrainingColumn';

const AiTrainingsTable = ({ ais }: { ais: IAiTraining[] }) => {
  return (
    <ManagementTable
      columns={AiTrainingColumn}
      data={ais}
      getRowKey={(a) => a._id}
      emptyMessage="No training data added"
    />
  );
};

export default AiTrainingsTable;
