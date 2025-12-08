import Container from '@/components/ui/Container';
import HtmlContent from '@/components/ui/HtmlContent';
import generateMetaTags from '@/seo/generateMetaTags';
import { getSingleTeamMember } from '@/services/team/team-member';

import { IParams } from '@/types';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: IParams) {
  const { slug } = await params;
  const { data: team } = await getSingleTeamMember(slug);

  if (!team) {
    notFound();
  }

  return generateMetaTags({
    title: `${team.name} | ${team.shrlDesignation}`,
    description: team.content?.replace(/<[^>]*>/g, '').slice(0, 160) || '',
    keywords: `${team.name}, ${team.shrlDesignation}, SHRL team`,
    image: team.photo,
    websitePath: `/team/${slug}`,
  });
}

const TeamDetails = async ({ params }: IParams) => {
  const { slug } = await params;
  const { data: team } = await getSingleTeamMember(slug);

  if (!team) {
    notFound();
  }

  return (
    <Container>
      <div className="group relative mx-auto h-36 w-36 overflow-hidden rounded-full border-2 shadow-lg transition-all duration-300 ease-in-out hover:h-48 hover:w-48 hover:bg-slate-500 hover:shadow-2xl">
        <Image
          src={team.photo}
          alt={team.name}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 hover:cursor-pointer"
          sizes="(min-width: 768px) 192px, 144px"
          priority
        />
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold">{team.name}</h2>
        <h3 className="font-semibold">{team.shrlDesignation}</h3>
        {team?.email && <p className="text-sm">{team.email}</p>}
        {team?.phone && <p className="text-sm">{team.phone}</p>}
      </div>

      <div className="mx-auto mt-2 max-w-xl text-center dark:text-white/95">
        {team.designation?.map((d, index) => (
          <p key={index}>{d}</p>
        ))}
      </div>

      <HtmlContent
        className="prose mx-auto mt-16 max-w-4xl rounded-lg px-8 pb-10 shadow-2xl shadow-slate-600 md:mt-4 md:border md:p-12"
        content={team.content}
      />
    </Container>
  );
};

export default TeamDetails;
