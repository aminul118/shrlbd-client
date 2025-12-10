import CardSkeleton from '@/components/common/loader/CardSkeleton';
import Career from '@/components/modules/Public/careers/CareerBanner';
import CareerCTA from '@/components/modules/Public/careers/CareerCTA';
import JobCard from '@/components/modules/Public/careers/JobCard';

import generateMetaTags from '@/seo/generateMetaTags';
import { getJobs } from '@/services/career/jobs';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';
import { Suspense } from 'react';

const CareersPage = async ({ searchParams }: ISearchParams) => {
  const params = await searchParams;
  const { data: jobs } = await getJobs(params);
  console.log(jobs);
  return (
    <div>
      <Career />
      {jobs.length > 0 ? (
        <Suspense fallback={<CardSkeleton count={6} />}>
          {jobs?.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </Suspense>
      ) : (
        <p className="py-32 text-center">No Job Found</p>
      )}
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
