import UpcomingEventsTable from '@/components/modules/UpcomingEvents/UpcomingEventsTable';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = {
  title: 'Upcoming Events | SHRL',
};
// >> SEO End

const UpcomingEventPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;
  return <UpcomingEventsTable props={resolvedSearchparams} />;
};

export default UpcomingEventPage;
