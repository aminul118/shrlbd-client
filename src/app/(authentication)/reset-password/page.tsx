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
    <div className="center">
      <ResetPassword props={resolvedSearchParams} />;
    </div>
  );
};

export default ResetPasswordPage;
