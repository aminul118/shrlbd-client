import Career from '@/components/modules/Root/careers/CareerBanner';
import CareerCTA from '@/components/modules/Root/careers/CareerCTA';
import Jobs from '@/components/modules/Root/careers/Jobs';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const CareersPage = () => {
  return (
    <div>
      <Career />
      <Jobs />
      <CareerCTA />
    </div>
  );
};

export default CareersPage;

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Careers | Smart Healthcare and Research Ltd. (SHRL)',
  description:
    'Explore rewarding career opportunities at Smart Healthcare and Research Ltd. (SHRL). Join our mission to transform healthcare through innovation, research, and digital health solutions. Apply now and become part of a passionate team driving meaningful change in maternal and child health.',
  keywords:
    'SHRL careers, Smart Healthcare and Research Ltd jobs, healthcare jobs Bangladesh, research careers Bangladesh, digital health careers, healthcare innovation jobs, public health careers, SHRL recruitment, medical research jobs Bangladesh, join SHRL team',
  image: '/seo/career.jpg',
  websitePath: '/careers',
});
// --> SEO End
