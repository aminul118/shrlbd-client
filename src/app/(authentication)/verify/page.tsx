import VerifyOTPForm from '@/components/modules/authentication/VerifyOTPForm';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Verify otp | SHRL',
  description: 'Write Description',
  keywords: 'write keyword not more than 60 words',
});

// >> SEO End
const VerifyOTPPage = () => {
  return (
    <div className="bg-muted grid h-screen overflow-x-hidden">
      <VerifyOTPForm />
    </div>
  );
};

export default VerifyOTPPage;
