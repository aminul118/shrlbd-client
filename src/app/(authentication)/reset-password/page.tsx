import ResetPassword from '@/components/modules/authentication/ResetPassword';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = {
  title: 'Reset Password | SHRL',
};
// >> SEO End

const ResetPasswordPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchParams = await searchParams;
  return (
    <div className="bg-muted flex h-screen flex-col justify-center overflow-x-hidden">
      <ResetPassword props={resolvedSearchParams} />;
    </div>
  );
};

export default ResetPasswordPage;
