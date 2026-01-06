import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import UpcomingEventsTable from '@/components/modules/Admin/upcoming-events/UpcomingEventsTable';
import { Button } from '@/components/ui/button';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getUpcomingEvents } from '@/services/event/upcoming-event';
import { SearchParams } from '@/types';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

const UpcomingEventPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getUpcomingEvents(params);

  return (
    <>
      <ClientTableWrapper
        tableTitle="All Upcoming Events"
        meta={meta}
        action={
          <Button asChild>
            <Link href="/admin/add-upcoming-event">
              <Plus />
              Add Upcoming Event
            </Link>
          </Button>
        }
      >
        <TableFilters />
        <UpcomingEventsTable events={data} />
      </ClientTableWrapper>
    </>
  );
};

export default UpcomingEventPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Upcoming Events | SHRL',
};
// >> SEO End
