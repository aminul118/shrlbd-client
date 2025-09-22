import ForgotPasswordForm from '@/components/modules/authentication/ForgotPasswordForm';
import generateMetaTags from '@/Seo/generateMetaTags';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Forgot Password',
  description: 'Description for Forgot Password Page',
  keywords: 'keyword',
});
// >> SEO End

const ForgotPasswordPage = () => {
  return (
    <div className="bg-muted grid h-screen place-items-center overflow-x-hidden">
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;
