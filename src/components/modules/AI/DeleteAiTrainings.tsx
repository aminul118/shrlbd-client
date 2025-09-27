'use client';

import DeleteConfirmation from '@/components/actions/DeleteConfirmation';
import { useDeleteAiTrainingDataMutation } from '@/redux/features/ai/ai.api';

const DeleteAiTrainings = ({ id }: { id: string }) => {
  const [deleteAiData] = useDeleteAiTrainingDataMutation();
  const handleDelete = async (id: string) => {
    return await deleteAiData(id).unwrap();
  };
  return (
    <DeleteConfirmation onConfirm={() => handleDelete(id)}></DeleteConfirmation>
  );
};

export default DeleteAiTrainings;
