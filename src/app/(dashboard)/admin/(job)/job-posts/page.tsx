import JobTable from '@/components/modules/JobPosts/JobTable';
import { ISearchParams } from '@/types';

const CareerPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;
  return (
    <div>
      <JobTable props={resolvedSearchparams} />
    </div>
  );
};

export default CareerPage;
