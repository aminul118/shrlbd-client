'use client';

import NotFound from '@/components/common/error/NotFound';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IJob } from '@/types';
import JobActions from './JobActions';

const JobTable = ({ jobs }: { jobs: IJob[] }) => {
  return (
    <>
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
    </>
  );
};

export default JobTable;
