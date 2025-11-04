import LoadingSpinner from '@/components/common/loader/LoadingSpinner';
import VerifyOTPForm from '@/components/modules/Authentication/VerifyOTPForm';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';
import { Suspense } from 'react';

const VerifyOTPPage = () => {
  return (
    <section className="center">
      <Suspense fallback={<LoadingSpinner />}>
        <VerifyOTPForm />
      </Suspense>
    </section>
  );
};

export default VerifyOTPPage;

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Verify otp | SHRL',
  description: 'Write Description',
  keywords: 'write keyword not more than 60 words',
});
// >> SEO End
