'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface SuccessOptions {
  res: any;
  message?: string;
  onSuccess?: () => void;
  path?: string;
  modalClose?: () => void;
  cleanUrl?: boolean; // 👈 NEW
}

const useToast = () => {
  const router = useRouter();

  const handleSuccess = async ({
    res,
    message = 'Form submitted',
    onSuccess,
    path,
    modalClose,
    cleanUrl = false,
  }: SuccessOptions) => {
    const toastId = toast.loading('Submitting...');

    if (res?.success && res?.statusCode === 201) {
      toast.success(res.message || message, { id: toastId });

      onSuccess?.();
      modalClose?.();

      if (path) {
        cleanUrl ? router.replace(path) : router.push(path);
      }

      return true;
    }

    toast.error(res?.message || 'Something went wrong', { id: toastId });
    return false;
  };

  return { handleSuccess };
};

export default useToast;
