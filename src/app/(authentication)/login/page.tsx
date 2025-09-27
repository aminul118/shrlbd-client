import LoginForm from '@/components/modules/authentication/LoginForm';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';
import { Suspense } from 'react';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Login | SHRL',
  description: 'Write Description',
  keywords: 'write keyword not more than 60 words',
  image: '/seo/shrl-hero-ss.png',
});
// >> SEO End

const LoginPage = () => {
  return (
    <div className="bg-muted flex min-h-screen flex-col items-center justify-center overflow-x-hidden p-2 md:p-10 lg:p-6">
      <div className="w-full max-w-sm md:max-w-4xl">
        <Suspense fallback={<></>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
};

export default LoginPage;
