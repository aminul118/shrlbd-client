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
import { useDeleteEventMutation } from '@/redux/features/event/event.api';
import { IEvent } from '@/types/apiData.types';
import { EllipsisIcon, EyeIcon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import ShowPreviousEventModal from './ShowPreviousEventModal';

const EventActions = ({ event }: { event: IEvent }) => {
  const [deleteEvent] = useDeleteEventMutation();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [showDetailsOpen, setShowDetailsOpen] = useState(false);

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

      {/* Modals */}

      <DeleteFromTableDropDown
        onConfirm={() => handleDelete(event._id)}
        open={deleteOpen}
        setOpen={setDeleteOpen}
      />

      <ShowPreviousEventModal
        event={event}
        open={showDetailsOpen}
        setOpen={setShowDetailsOpen}
      />
    </>
  );
};

export default EventActions;
