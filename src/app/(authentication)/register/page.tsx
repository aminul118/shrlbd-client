import RegisterForm from '@/components/modules/authentication/RegisterForm';
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
  title: 'Register | SHRL',
  description: 'Write Description',
  keywords: 'write keyword not more than 60 words',
});
// >> SEO End
