import Blogs from '@/components/modules/Blogs/Blogs';
import generateMetaTags from '@/seo/generateMetaTags';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

const BlogsPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;
  return (
    <>
      <Blogs props={resolvedSearchparams} />
    </>
  );
};

export default BlogsPage;

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Blogs | Smart Healthcare and Research Ltd',
  description:
    'Explore the latest blogs from Smart Healthcare and Research Ltd. (SHRL) covering healthcare innovations, medical research, digital health trends, and community health insights from Bangladesh and beyond.',
  keywords:
    'SHRL blogs, healthcare articles Bangladesh, medical research, SHRL news, public health insights, digital health Bangladesh, healthcare innovation, SHRL research updates, medical technology blogs, community health awareness',
  image: '/seo/shrl-hero-ss.png',
  websitePath: 'blogs',
});
// --> SEO End
