import TeamList from '@/components/modules/Team/TeamList';
import generateMetaTags from '@/Seo/generateMetaTags';
import { ISearchParams } from '@/types';

import { Metadata } from 'next';

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

const TeamMemberPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchParams = await searchParams;

  return <TeamList props={resolvedSearchParams} />;
};
export default TeamMemberPage;
