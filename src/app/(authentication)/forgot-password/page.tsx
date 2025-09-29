import ForgotPasswordForm from '@/components/modules/authentication/ForgotPasswordForm';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Forgot Password | SHRL',
  description: 'Description for Forgot Password Page',
  keywords: 'keyword',
});
// >> SEO End

const ForgotPasswordPage = () => {
  return (
    <div className="center">
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
