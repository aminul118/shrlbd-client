import ChangePasswordForm from '@/components/modules/Authentication/ChangePasswordForm';
import { Metadata } from 'next';

const ChangePasswordPage = () => {
  return (
    <>
      <ChangePasswordForm />
    </>
  );
};

export default ChangePasswordPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Change Password | SHRL',
};
// >> SEO End
