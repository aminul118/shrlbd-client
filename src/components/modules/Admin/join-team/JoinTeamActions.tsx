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
import { useDeleteJoinRequestMutation } from '@/redux/features/joinTeam/joinTeam.api';
import { ITeamJoinRequest } from '@/types/apiData.types';
import { EllipsisIcon, EyeIcon, MailIcon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import { ShowRequestModal } from './ShowRequestModal';
import TeamJoinSendMessage from './TeamJoinSendMessage';

const JoinTeamActions = ({ team }: { team: ITeamJoinRequest }) => {
  const [deleteJoin] = useDeleteJoinRequestMutation();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [sendMailOpen, setSendMailOpen] = useState(false);
  const [showRequestOpen, setShowRequestOpen] = useState(false);

  const handleDelete = async (id: string) => {
    const res = await deleteJoin(id).unwrap();
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
          <DropdownMenuItem onClick={() => setShowRequestOpen(true)}>
            <EyeIcon className="mr-2 h-4 w-4" />
            <span>Details</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setSendMailOpen(true)}>
            <MailIcon className="mr-2 h-4 w-4" />
            <span>Send Mail</span>
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
      <TeamJoinSendMessage
        open={sendMailOpen}
        setOpen={setSendMailOpen}
        email={team.email}
      />

      <DeleteFromTableDropDown
        open={deleteOpen}
        setOpen={setDeleteOpen}
        onConfirm={() => handleDelete(team._id)}
      />

      <ShowRequestModal
        open={showRequestOpen}
        setOpen={setShowRequestOpen}
        request={team}
      />
    </>
  );
};

export default JoinTeamActions;
