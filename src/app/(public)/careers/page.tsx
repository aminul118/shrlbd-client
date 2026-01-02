import CardSkeleton from '@/components/common/loader/CardSkeleton';
import Career from '@/components/modules/Public/careers/CareerBanner';
import CareerCTA from '@/components/modules/Public/careers/CareerCTA';
import JobsList from '@/components/modules/Public/careers/JobList.';
import Container from '@/components/ui/Container';
import cleanSearchParams from '@/lib/cleanSearchParams';

import generateMetaTags from '@/seo/generateMetaTags';
import { SearchParams } from '@/types';
import { Metadata } from 'next';
import { Suspense } from 'react';

const CareersPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);

  return (
    <div>
      <Career />
      <Container>
        <Suspense fallback={<CardSkeleton count={3} />}>
          <JobsList params={params} />
        </Suspense>
      </Container>
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
