import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import AddAiTrainingsModal from '@/components/modules/Admin/ai/AddAiTrainingsModal';
import AiTrainingsTable from '@/components/modules/Admin/ai/AiTrainingsTable';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getAis } from '@/services/ai/ai';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const AiTrainingsPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data } = await getAis(params);

  return (
    <ClientTableWrapper
      tableTitle="AI Trainings"
      action={<AddAiTrainingsModal />}
    >
      <TableFilters />
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
