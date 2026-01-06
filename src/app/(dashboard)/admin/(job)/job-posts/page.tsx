import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import AddJobModal from '@/components/modules/Admin/Careers/AddJobModal';
import AddJobTypeModal from '@/components/modules/Admin/Careers/AddJobTypeModal';
import JobTable from '@/components/modules/Admin/Careers/JobTable';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getJobs } from '@/services/career/jobs';
import { SearchParams } from '@/types';

const CareerPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data } = await getJobs(params);
  return (
    <ClientTableWrapper
      tableTitle="Job Posts"
      action={
        <div className="space-x-3">
          <AddJobModal />
          <AddJobTypeModal />
        </div>
      }
    >
      <TableFilters />
      <JobTable jobs={data} />
    </ClientTableWrapper>
  );
};

export default CareerPage;
