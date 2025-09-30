'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDeleteTeamMemberMutation } from '@/redux/features/team/team.api';
import { ITeamMember } from '@/types';
import { EllipsisIcon, EyeIcon, PencilIcon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import DeleteFromTableDropDown from '../../actions/DeleteFromTableDropDown';
import EditTeamMember from './EditTeamMember';
import TeamMemberModal from './TeamMemberModal';

const TeamMemberActions = ({ member }: { member: ITeamMember }) => {
  const [teamMemberModalOpen, setTeamMemberModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteTeamMember] = useDeleteTeamMemberMutation();

  const handleDelete = async (slug: string) => {
    const res = await deleteTeamMember(slug).unwrap();
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
          {/* Trigger modal */}
          <DropdownMenuItem onClick={() => setTeamMemberModalOpen(true)}>
            <EyeIcon className="mr-2 h-4 w-4" />
            <span>View Details</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setEditModalOpen(true)}>
            <PencilIcon className="mr-2 h-4 w-4" />
            <span>Edit Profile</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onClick={() => setDeleteModalOpen(true)}
          >
            <Trash2Icon className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Modal rendered outside dropdown */}
      <TeamMemberModal
        member={member}
        open={teamMemberModalOpen}
        setOpen={setTeamMemberModalOpen}
      />

      <DeleteFromTableDropDown
        open={deleteModalOpen}
        setOpen={setDeleteModalOpen}
        onConfirm={() => handleDelete(member.slug)}
      />

      <EditTeamMember
        member={member}
        open={editModalOpen}
        setOpen={setEditModalOpen}
      />
    </>
  );
};

export default TeamMemberActions;
