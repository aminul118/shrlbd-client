'use client';

import { deleteScrollingText } from '@/actions/scrolling-text';
import DeleteConfirmation from '@/components/actions/DeleteConfirmation';

const DeleteTeamMember = ({ id }: { id: string }) => {
  const handleDelete = async (id: string) => {
    return await deleteScrollingText(id);
  };
  return (
    <DeleteConfirmation onConfirm={() => handleDelete(id)}></DeleteConfirmation>
  );
};

export default DeleteTeamMember;
