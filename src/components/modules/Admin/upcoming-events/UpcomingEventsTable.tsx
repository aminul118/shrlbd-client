'use client';

import TableManageMent from '@/components/common/table/TableManageMent';
import { IUpcomingEvent } from '@/types';
import UpcomingEventsColumn from './UpcomingEventsColumn';

interface Props {
  events: IUpcomingEvent[];
}

const UpcomingEventsTable = ({ events }: Props) => {
  return (
    <>
      <TableManageMent
        columns={UpcomingEventsColumn}
        data={events}
        getRowKey={(e) => e._id}
        emptyMessage="No Upcoming Event Found"
      />
    </>
  );
};

export default UpcomingEventsTable;
