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
  return (
    <div>
      <AiTrainingsTable props={resolvedSearchparams} />
    </div>
  );
};

export default AiTrainingsPage;
