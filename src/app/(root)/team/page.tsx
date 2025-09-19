/* eslint-disable @typescript-eslint/no-explicit-any */
import TeamList from '@/components/modules/Team/TeamList';
import Container from '@/components/ui/Container';
import generateMetaTags from '@/Seo/generateMetaTags';

import { Metadata } from 'next';

// ---> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Team Members - SHRL',
  description:
    'Meet the passionate and experienced team behind Smart Healthcare and Research Ltd. Our founding members are healthcare leaders, researchers, and public health experts dedicated to transforming maternal and child health in Bangladesh through innovation, research, and compassionate care.',
  keywords:
    'Smart Healthcare team, SHRL team members, healthcare professionals Bangladesh, maternal and child health experts, public health specialists, BAN-GDM team, SHRL founding members, healthcare leadership Bangladesh, women’s health experts, clinical researchers Bangladesh, SHRL board, digital health innovators, healthcare team Bangladesh, SHRL doctors and researchers',
  image: '/seo/shrl-hero-ss.png',
  websitePath: 'team',
});
// ---> SEO END

const TeamMemberPage = async ({
  searchParams,
}: {
  params: Record<string, string>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) => {
  const resolve = await searchParams;
  console.log(resolve);
  return (
    <Container className="py-12">
      <TeamList searchParams={resolve} />
    </Container>
  );
};
export default TeamMemberPage;
