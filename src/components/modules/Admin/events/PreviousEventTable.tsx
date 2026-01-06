'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { IEvent } from '@/types';
import PreviousEventColumn from './PreviousEventColumn';

interface Props {
  events: IEvent[];
}

const PreviousEventTable = ({ events }: Props) => {
  return (
    <>
      <TableManageMent
        columns={PreviousEventColumn}
        data={events}
        getRowKey={(e) => e._id}
        emptyMessage="No events found"
      />
    </>
  );
};

export default PreviousEventTable;
