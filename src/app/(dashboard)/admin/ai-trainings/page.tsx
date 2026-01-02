import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import AiTrainingsTable from '@/components/modules/Admin/ai/AiTrainingsTable';
import AiTrainngsFilters from '@/components/modules/Admin/ai/AiTrainngsFilters';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getAis } from '@/services/ai/ai';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const AiTrainingsPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data } = await getAis(params);
  return (
    <ClientTableWrapper
      filters={<AiTrainngsFilters />}
      tableTitle="AI Trainings"
    >
      <AiTrainingsTable ais={data} />
    </ClientTableWrapper>
  );
};

export default AiTrainingsPage;

// >> Meta Data Start
export const metadata: Metadata = {
  title: 'AI Trainings | SHRL',
};
// >> Meta Data End
