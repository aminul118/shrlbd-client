'use client';

import DeleteConfirmation from '@/components/actions/DeleteConfirmation';
import { useDeleteJoinRequestMutation } from '@/redux/features/joinTeam/joinTeam.api';

const DeleteJoinTeamRequest = ({ id }: { id: string }) => {
  const [deleteJoin] = useDeleteJoinRequestMutation();
  const handleDelete = async (id: string) => {
    return await deleteJoin(id).unwrap();
  };
  return (
    <DeleteConfirmation onConfirm={() => handleDelete(id)}></DeleteConfirmation>
  );
};

export default DeleteJoinTeamRequest;
