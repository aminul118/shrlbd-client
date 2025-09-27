import PreviousEventTable from '@/components/modules/events/PreviousEventTable';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = {
  title: 'Previous Events| SHRL',
};
// >> SEO End

const PreviousEvents = async ({ searchParams }: ISearchParams) => {
  const resolveParams = await searchParams;
  return <PreviousEventTable props={resolveParams} />;
};

export default PreviousEvents;
