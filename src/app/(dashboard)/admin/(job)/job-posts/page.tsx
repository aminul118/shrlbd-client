import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import JobFilters from '@/components/modules/Admin/Careers/JobFilter';
import JobTable from '@/components/modules/Admin/Careers/JobTable';
import Container from '@/components/ui/Container';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getJobs } from '@/services/career/jobs';
import { SearchParams } from '@/types';

const CareerPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data } = await getJobs(params);
  return (
    <Container>
      <ClientTableWrapper tableTitle="Job Posts" filters={<JobFilters />}>
        <JobTable jobs={data} />
      </ClientTableWrapper>
    </Container>
  );
};

export default CareerPage;
