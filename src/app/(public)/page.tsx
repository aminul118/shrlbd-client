import Contact from '@/components/modules/Root/contact/Contact';
import Commitments from '@/components/modules/Root/home/Commitment';
import Faq from '@/components/modules/Root/home/Faq';
import FoundingTeam from '@/components/modules/Root/home/FoundingTeam';
import HeroBanner from '@/components/modules/Root/home/HeroBanner';
import KeyServices from '@/components/modules/Root/key-services/KeyServices';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <KeyServices className="pt-12" />
      <FoundingTeam />
      <Commitments />
      <Faq />
      <Contact />
    </>
  );
};

export default HomePage;

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
