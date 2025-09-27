'use client';

import DeleteConfirmation from '@/components/actions/DeleteConfirmation';
import { useDeleteUpcomingEventMutation } from '@/redux/features/event/event.api';

const DeleteUpcomingEvent = ({ id }: { id: string }) => {
  const [deleteTeamMember] = useDeleteUpcomingEventMutation();
  const handleDelete = async (id: string) => {
    const res = await deleteTeamMember(id).unwrap();
    console.log(res);
    return res;
  };
  return (
    <DeleteConfirmation onConfirm={() => handleDelete(id)}></DeleteConfirmation>
  );
};

export default DeleteUpcomingEvent;
