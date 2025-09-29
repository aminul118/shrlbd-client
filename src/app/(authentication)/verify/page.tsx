import VerifyOTPForm from '@/components/modules/authentication/VerifyOTPForm';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';
import { Suspense } from 'react';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Verify otp | SHRL',
  description: 'Write Description',
  keywords: 'write keyword not more than 60 words',
});

// >> SEO End
const VerifyOTPPage = () => {
  return (
    <section className="center">
      <Suspense fallback={<div>Loading.....</div>}>
        <VerifyOTPForm />
      </Suspense>
    </section>
  );
};

export default VerifyOTPPage;
