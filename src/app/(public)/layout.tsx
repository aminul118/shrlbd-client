import Footer from '@/components/layouts/Footer/Footer';
import Navbar from '@/components/layouts/Navbar/Navbar';
import generateMetaTags from '@/seo/generateMetaTags';
import { IChildren } from '@/types';
import { Metadata } from 'next';

const MainLayout = ({ children }: IChildren) => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title:
    'Smart Healthcare and Research Ltd. - Empowering Maternal & Child Health',
  description:
    'Smart Healthcare and Research Ltd. offers innovative healthcare solutions for women and children, including online consultations, research, professional training, and community outreach.',
  keywords:
    "Smart Healthcare, SHRL, SHRLBD, Maternal health, Child healthcare, Digital healthcare services, Diabetes in pregnancy, Healthcare research, Public health, Professional training healthcare, Women's health, Child health, SHRL Bangladesh, Healthcare innovation",
});
// >> SEO End
