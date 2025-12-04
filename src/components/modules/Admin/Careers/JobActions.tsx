'use client';

import DeleteFromTableDropDown from '@/components/common/actions/DeleteFromTableDropDown';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDeleteJobMutation } from '@/redux/features/jobs/job.api';
import { IJob } from '@/types/apiData.types';
import { EllipsisIcon, EyeIcon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import ShowJobModal from './ShowJobModal';

const JobActions = ({ job }: { job: IJob }) => {
  const [deleteJob] = useDeleteJobMutation();

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [showDetailsOpen, setShowDetailsOpen] = useState(false);

  const handleDelete = async (slug: string) => {
    const res = await deleteJob(slug).unwrap();
    return res;
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex justify-end">
            <Button
              size="icon"
              variant="ghost"
              className="shadow-none"
              aria-label="Actions"
            >
              <EllipsisIcon size={16} aria-hidden="true" />
            </Button>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="min-w-48">
          <DropdownMenuItem onClick={() => setShowDetailsOpen(true)}>
            <EyeIcon className="mr-2 h-4 w-4" />
            <span>Details</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onClick={() => setDeleteOpen(true)}
          >
            <Trash2Icon className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Delete Confirmation Modal */}
      <DeleteFromTableDropDown
        onConfirm={() => handleDelete(job.slug)}
        open={deleteOpen}
        setOpen={setDeleteOpen}
      />

      {/* Job Details Modal */}
      <ShowJobModal
        job={job}
        open={showDetailsOpen}
        setOpen={setShowDetailsOpen}
      />
    </>
  );
};

export default JobActions;
