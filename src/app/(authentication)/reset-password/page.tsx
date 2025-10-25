import ResetPassword from '@/components/modules/authentication/ResetPassword';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

const ResetPasswordPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchParams = await searchParams;
  return (
    <div className="center">
      <ResetPassword props={resolvedSearchParams} />
    </div>
  );
};

export default ResetPasswordPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Reset Password | SHRL',
};
// >> SEO End
