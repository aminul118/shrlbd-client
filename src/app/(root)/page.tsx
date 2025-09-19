import Contact from '@/components/modules/Contact/Contact';
import Commitment from '@/components/modules/Home/Commitment';
import Faq from '@/components/modules/Home/Faq';
import FoundingTeam from '@/components/modules/Home/FoundingTeam';
import HeroBanner from '@/components/modules/Home/HeroBanner';
import KeyServices from '@/components/modules/KeyServices/KeyServices';
import generateMetaTags from '@/Seo/generateMetaTags';
import { Metadata } from 'next';

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title:
    'Smart Healthcare and Research Ltd. - Empowering Maternal & Child Health',
  description:
    'Smart Healthcare and Research Ltd. offers innovative healthcare solutions for women and children, including online consultations, research, professional training, and community outreach.',
  keywords:
    "Smart Healthcare, shrl, shrlbd, Maternal health, Child healthcare, Digital healthcare services, Diabetes in pregnancy, Healthcare research, Public health, Professional training healthcare, Women's health",
  image: '/seo/shrl-hero-ss.png',
});
// --> SEO End

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <KeyServices className="pt-12" />
      <FoundingTeam />
      <Commitment />
      <Faq />
      <Contact />
    </>
  );
};

export default HomePage;
