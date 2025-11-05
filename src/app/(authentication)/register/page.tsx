import RegisterForm from '@/components/modules/Authentication/RegisterForm';
import { Button } from '@/components/ui/button';
import { P } from '@/components/ui/typography';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <section className="center">
      <RegisterForm className="w-full max-w-sm md:max-w-5xl" />
      <P className="mt-4 text-center text-sm" data-aos="fade-left">
        By clicking continue, you agree to our
        <Button variant="link" asChild className="px-2">
          <Link href="/terms-conditions">Terms and Conditions</Link>
        </Button>
        and
        <Button variant="link" asChild className="px-2">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </Button>
      </P>
    </section>
  );
};

export default RegisterPage;

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Register | Smart Healthcare and Research Limited',
  description:
    'Create your account at Smart Healthcare and Research Limited to access advanced medical research tools, healthcare services, and personalized support.',
  keywords:
    'register, create account, sign up, Smart Healthcare and Research Limited, medical research, healthcare innovation, SHRL registration, join healthcare platform, medical data access',
  websitePath: '/register',
});
// >> SEO End
