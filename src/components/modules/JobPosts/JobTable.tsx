'use client';

import NotFound from '@/components/common/error/NotFound';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import TableSkeleton from '@/components/common/loader/TableSkeleton';
import AppPagination from '@/components/common/pagination/AppPagination';
import GoToPage from '@/components/common/pagination/GoToPage';
import PageLimit from '@/components/common/pagination/PageLimit';
import PaginationStatus from '@/components/common/pagination/PaginationStatus';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import Container from '@/components/ui/Container';
import GradientTitle from '@/components/ui/gradientTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  useGetAllJobsQuery,
  useGetAllJobTypesQuery,
} from '@/redux/features/jobs/job.api';
import { IJob, IMeta } from '@/types';
import AddJobModal from './AddJobModal';
import AddJobTypeModal from './AddJobTypeModal';
import JobActions from './JobActions';

const JobTable = ({ props }: { props: Record<string, any> }) => {
  const params = { ...props };
  const { data, isLoading } = useGetAllJobsQuery(params);
  const { data: allJobsTypes } = useGetAllJobTypesQuery({});

  const jobs = data?.data || [];
  const meta = data?.meta;

  const jobsTypes = allJobsTypes?.data || [];

  if (isLoading) return <TableSkeleton />;

  return (
    <Container>
      {/* Title */}
      <div className="mb-6 flex justify-start">
        <GradientTitle title="Job Posts" />
      </div>
      <JobFilter />
      <TableCreate jobs={jobs} />
      <JobPagination meta={meta} />
    </Container>
  );
};

// Table Component
const TableCreate = ({ jobs }: { jobs: IJob[] }) => {
  return (
    <div className="col-span-10 w-full overflow-x-auto">
      <Table className="w-full">
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead>SI</TableHead>
            <TableHead>Photo</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.length === 0 ? (
            <TableRow className="hover:bg-primary/10">
              <TableCell colSpan={5} className="py-6 text-center">
                <NotFound />
              </TableCell>
            </TableRow>
          ) : (
            jobs.map((job, i: number) => (
              <TableRow key={job._id} className="hover:bg-primary/10">
                <TableCell>{i + 1}</TableCell>
                <TableCell>{/* TODO: Render photo */}</TableCell>
                <TableCell>{job.title}</TableCell>
                <TableCell></TableCell>
                <TableCell className="text-center">
                  <JobActions job={job} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

// Filters
const JobFilter = () => {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <AppSearching />

      <div className="flex items-center gap-3">
        <PageLimit pageNumbers={[10, 20, 30, 40]} />
        <Sorting
          sortOptions={[
            { name: 'Ascending', value: '-createdAt' },
            { name: 'Descending', value: 'createdAt' },
          ]}
        />
        <ClearAllFilter />
        <AddJobModal />
        <AddJobTypeModal />
      </div>
    </div>
  );
};

// Pagination
const JobPagination = ({ meta }: { meta?: IMeta }) => {
  if (!meta) return null;

  return (
    <div className="mt-6 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
      <GoToPage totalPage={meta.totalPage} />
      <div className="flex items-center gap-4">
        <PaginationStatus meta={meta} />
        <AppPagination className="justify-end" meta={meta} />
      </div>
    </div>
  );
};

export default JobTable;
