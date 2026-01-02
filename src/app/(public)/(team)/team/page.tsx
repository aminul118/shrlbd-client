import NotFound from '@/components/common/error/NotFound';
import ClientWrapper from '@/components/common/wrapper/ClientWrapper';
import TeamMemberCard from '@/components/modules/Public/team/TeamMemberCard';
import Container from '@/components/ui/Container';
import cleanSearchParams from '@/lib/cleanSearchParams';
import generateMetaTags from '@/seo/generateMetaTags';
import { getTeamMembers } from '@/services/team/team-member';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const TeamMemberPage = async ({ searchParams }: SearchParams) => {
  const resolveParams = await cleanSearchParams(searchParams);

  const params = {
    sort: 'createdAt',
    ...resolveParams,
  };

  const { data, meta } = await getTeamMembers(params);

  return (
    <ClientWrapper meta={meta}>
      <Container className="py-12">
        {data?.length > 0 ? (
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 2xl:grid-cols-3">
            {data.map((member) => (
              <TeamMemberCard key={member._id} {...member} />
            ))}
          </div>
        ) : (
          <NotFound />
        )}
      </Container>
    </ClientWrapper>
  );
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
