import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import JobFilters from '@/components/modules/Admin/Careers/JobFilter';
import JobTable from '@/components/modules/Admin/Careers/JobTable';
import { getJobs } from '@/services/career/jobs';
import { SearchParams } from '@/types';
import cleanSearchParams from '@/utils/cleanSearchParams';

const CareerPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data } = await getJobs(params);
  return (
    <ClientTableWrapper tableTitle="Job Posts" filters={<JobFilters />}>
      <JobTable jobs={data} />
    </ClientTableWrapper>
  );
};

export default CareerPage;
