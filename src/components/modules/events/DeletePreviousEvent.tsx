'use client';

import DeleteConfirmation from '@/components/actions/DeleteConfirmation';
import { useDeleteEventMutation } from '@/redux/features/event/event.api';

const DeletePreviousEvent = ({ id }: { id: string }) => {
  const [deleteEvent] = useDeleteEventMutation();
  const handleDelete = async (id: string) => {
    return await deleteEvent(id).unwrap();
  };
  return (
    <DeleteConfirmation onConfirm={() => handleDelete(id)}></DeleteConfirmation>
  );
};

export default DeletePreviousEvent;
