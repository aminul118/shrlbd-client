import LoginForm from '@/components/modules/authentication/LoginForm';
import generateMetaTags from '@/Seo/generateMetaTags';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Login',
  description: 'Write Description',
  keywords: 'write keyword not more than 60 words',
  image: '/seo/shrl-hero-ss.png',
});
// >> SEO End

const LoginPage = () => {
  return (
    <div className="bg-muted flex min-h-screen flex-col items-center justify-center overflow-x-hidden p-2 md:p-10 lg:p-6">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
