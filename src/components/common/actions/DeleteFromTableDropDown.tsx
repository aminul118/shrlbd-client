'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';

interface IDeleteResponse {
  success: boolean;
  message?: string;
}

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  onConfirm: () => Promise<IDeleteResponse>;
}

const DeleteFromTableDropDown = ({ open, setOpen, onConfirm }: Props) => {
  const handleDelete = async () => {
    const toastId = toast.loading('Removing...');
    try {
      const res = await onConfirm();
      console.log('RES-->', res);
      if (res.success) {
        toast.success(res.message ?? 'Removed Successfully', {
          id: toastId,
        });
      }
    } catch {
      toast.error('Failed to delete. Please try again.', { id: toastId });
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteFromTableDropDown;
