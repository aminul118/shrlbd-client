import PreviousEventTable from '@/components/modules/Admin/events/PreviousEventTable';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const PreviousEvents = async ({ searchParams }: SearchParams) => {
  const resolveParams = await searchParams;
  return <PreviousEventTable props={resolveParams} />;
};

export default PreviousEvents;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Previous Events| SHRL',
};
// >> SEO End
