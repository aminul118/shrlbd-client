import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';

import PreviousEventTable from '@/components/modules/Admin/events/PreviousEventTable';
import { Button } from '@/components/ui/button';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getEvents } from '@/services/event/event';
import { SearchParams } from '@/types';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

const PreviousEvents = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getEvents(params);

  return (
    <>
      <ClientTableWrapper
        meta={meta}
        tableTitle="All Previous Events"
        action={
          <Button>
            <Plus /> <Link href={'/admin/add-previous-event'}>Add Event</Link>
          </Button>
        }
      >
        <TableFilters />
        <PreviousEventTable events={data} />
      </ClientTableWrapper>
    </>
  );
};

export default PreviousEvents;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Previous Events| SHRL',
};
// >> SEO End
