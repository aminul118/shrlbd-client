import { toast } from 'sonner';

interface SuccessOptions {
  res: any;
  message?: string;
  onSuccess?: () => void;
}

const handleSuccess = async ({
  res,
  message = 'Form submitted',
  onSuccess,
}: SuccessOptions) => {
  const toastId = toast.loading('Submitting...');
  if (res.success && res?.statusCode === 201) {
    toast.success(res.message || message, { id: toastId });
    onSuccess?.();
    return true;
  }
  return false;
};

export { handleSuccess };
