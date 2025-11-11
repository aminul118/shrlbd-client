import TeamList from '@/components/modules/Team/TeamMembers';
import generateMetaTags from '@/seo/generateMetaTags';

import { Metadata } from 'next';

const TeamMemberPage = () => {
  return <TeamList />;
};
export default TeamMemberPage;

// ---> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Team Members - SHRL',
  description:
    'Meet the passionate and experienced team behind Smart Healthcare and Research Ltd. Our founding members are healthcare leaders, researchers, and public health experts dedicated to transforming maternal and child health in Bangladesh through innovation, research, and compassionate care.',
  keywords:
    'Smart Healthcare team, SHRL team members, healthcare professionals Bangladesh, maternal and child health experts, public health specialists, BAN-GDM team, SHRL founding members, healthcare leadership Bangladesh, women’s health experts, clinical researchers Bangladesh, SHRL board, digital health innovators, healthcare team Bangladesh, SHRL doctors and researchers',
  websitePath: 'team',
});
// ---> SEO END
