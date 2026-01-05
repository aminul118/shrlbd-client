'use client';

import ManagementTable from '@/components/common/table/ManageMentTable';
import { IEvent } from '@/types';
import PreviousEventColumn from './PreviousEventColumn';

interface Props {
  events: IEvent[];
}

const PreviousEventTable = ({ events }: Props) => {
  return (
    <>
      <ManagementTable
        columns={PreviousEventColumn}
        data={events}
        getRowKey={(e) => e._id}
        emptyMessage="No events found"
      />
    </>
  );
};

export default PreviousEventTable;
