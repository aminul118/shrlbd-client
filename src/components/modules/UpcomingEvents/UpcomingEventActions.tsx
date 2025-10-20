'use client';

import DeleteFromTableDropDown from '@/components/actions/DeleteFromTableDropDown';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDeleteUpcomingEventMutation } from '@/redux/features/event/event.api';
import { IUpcomingEvent } from '@/types';
import { EllipsisIcon, EyeIcon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import ViewUpcomingEventModal from './ViewUpcomingEventModal';

const UpcomingEventActions = ({ event }: { event: IUpcomingEvent }) => {
  const [deleteEvent] = useDeleteUpcomingEventMutation();
  const [detailsOpen, setDetailOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDelete = async (id: string) => {
    const res = await deleteEvent(id).unwrap();
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
          <DropdownMenuItem onClick={() => setDetailOpen(true)}>
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

      {/* Modals */}
      <ViewUpcomingEventModal
        open={detailsOpen}
        setOpen={setDetailOpen}
        event={event}
      />

      <DeleteFromTableDropDown
        open={deleteOpen}
        setOpen={setDeleteOpen}
        onConfirm={() => handleDelete(event._id)}
      />
    </>
  );
};

export default UpcomingEventActions;
