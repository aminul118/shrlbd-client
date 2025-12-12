import JobFilters from '@/components/modules/Admin/Careers/JobFilter';
import JobTable from '@/components/modules/Admin/Careers/JobTable';
import Container from '@/components/ui/Container';
import GradientTitle from '@/components/ui/gradientTitle';
import { SearchParams } from '@/types';

const CareerPage = async ({ searchParams }: SearchParams) => {
  const resolvedSearchparams = await searchParams;
  return (
    <Container>
      <div className="mb-6 flex justify-start">
        <GradientTitle title="Job Posts" />
      </div>
      <JobFilters />
      <JobTable props={resolvedSearchparams} />
    </Container>
  );
};

export default CareerPage;
