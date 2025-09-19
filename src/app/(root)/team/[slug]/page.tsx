import TeamDetailsCard from '@/components/modules/Team/TeamDetailsCard';
import TeamDetailsCardSkeleton from '@/components/modules/Team/TeamDetailsCardSkeleton';
import api from '@/lib/api';
import generateMetaTags from '@/Seo/generateMetaTags';
import { IParams } from '@/types';
import { Suspense } from 'react';

// ---> SEO Starts
export async function generateMetadata({ params }: IParams) {
  const { slug } = await params;
  const { data: team } = await api.team.getSingleTeamMember(slug);

  return generateMetaTags({
    title: `${team.name} | ${team.shrlDesignation}`,
    description: team.content?.replace(/<[^>]*>/g, '').slice(0, 160),
    keywords: `${team.name}, ${team.shrlDesignation}, SHRL team`,
    image: team.photo,
    websitePath: `/team/${slug}`,
  });
}
// ---> SEO END

const TeamDetails = async ({ params }: IParams) => {
  const { slug } = await params;

  return (
    <Suspense fallback={<TeamDetailsCardSkeleton />}>
      <TeamDetailsCard slug={slug} />
    </Suspense>
  );
};

export default TeamDetails;
