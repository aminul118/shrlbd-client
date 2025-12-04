'use client';

import NotFound from '@/components/common/error/NotFound';
import TableSkeleton from '@/components/common/loader/TableSkeleton';
import TablePagination from '@/components/common/pagination/TablePagination';
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
import { IJob } from '@/types';
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
    <>
      <TableCreate jobs={jobs} />
      <TablePagination meta={meta} />
    </>
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

export default JobTable;
