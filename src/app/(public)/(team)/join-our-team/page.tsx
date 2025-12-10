import JoinTeamForm from '@/components/modules/Public/join-team/JoinTeamForm';
import JoinTeamIntro from '@/components/modules/Public/join-team/JoinTeamIntro';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const JoinTeamPage = () => {
  return (
    <div className="mx-auto max-w-3xl overflow-x-hidden">
      <JoinTeamIntro />
      <JoinTeamForm />
    </div>
  );
};

export default JoinTeamPage;

// ---> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Join Our Team | Smart Healthcare and Research Ltd (SHRL)',
  description:
    'Looking for a career in digital healthcare and research? Join SHRL’s multidisciplinary team and contribute to maternal, child, and adolescent health innovations in Bangladesh.',
  keywords:
    'Join SHRL team, healthcare careers Bangladesh, SHRL jobs, maternal health research careers, adolescent health jobs, healthcare innovation careers, digital health Bangladesh, career in research and healthcare, Smart Healthcare and Research Ltd jobs',
  image: '/seo/shrl-hero-ss.png',
  websitePath: '/join-team',
});
// ---> SEO End
