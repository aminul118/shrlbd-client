import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import UpcomingEventsFilter from '@/components/modules/Admin/upcoming-events/UpcomingEventsFilter';
import UpcomingEventsTable from '@/components/modules/Admin/upcoming-events/UpcomingEventsTable';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getUpcomingEvents } from '@/services/event/upcoming-event';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const UpcomingEventPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getUpcomingEvents(params);

  return (
    <>
      <ClientTableWrapper
        tableTitle="All Upcoming Events"
        meta={meta}
        filters={<UpcomingEventsFilter />}
      >
        <UpcomingEventsTable upcomingEvents={data} />
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
