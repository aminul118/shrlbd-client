import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import EventFilters from '@/components/modules/Admin/events/EventFilters';
import PreviousEventTable from '@/components/modules/Admin/events/PreviousEventTable';
import { getEvents } from '@/services/event/event';
import { SearchParams } from '@/types';
import cleanSearchParams from '@/utils/cleanSearchParams';
import { Metadata } from 'next';

const PreviousEvents = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getEvents(params);

  return (
    <>
      <ClientTableWrapper
        filters={<EventFilters />}
        meta={meta}
        tableTitle="All Previous Events"
      >
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
