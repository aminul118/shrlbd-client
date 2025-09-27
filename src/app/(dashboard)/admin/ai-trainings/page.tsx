import AiTrainingsTable from '@/components/modules/AI/AiTrainingsTable';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = {
  title: 'AI Trainings | SHRL',
};
// >> SEO End

const AiTrainingsPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;
  return <AiTrainingsTable props={resolvedSearchparams} />;
};

export default AiTrainingsPage;
