'use client';

import ManagementTable from '@/components/common/table/ManageMentTable';
import { IUpcomingEvent } from '@/types';
import UpcomingEventsColumn from './UpcomingEventsColumn';

interface Props {
  events: IUpcomingEvent[];
}

const UpcomingEventsTable = ({ events }: Props) => {
  return (
    <>
      <ManagementTable
        columns={UpcomingEventsColumn}
        data={events}
        getRowKey={(e) => e._id}
        emptyMessage="No Upcoming Event Found"
      />
    </>
  );
};

export default UpcomingEventsTable;
