import AiTrainingsTable from '@/components/modules/Admin/ai/AiTrainingsTable';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

const AiTrainingsPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;
  return <AiTrainingsTable props={resolvedSearchparams} />;
};

export default AiTrainingsPage;

// >> Meta Data Start
export const metadata: Metadata = {
  title: 'AI Trainings | SHRL',
};
// >> Meta Data End
