import BlogsTable from '@/components/modules/Admin/blogs/BlogsTable';
import { ISearchParams } from '@/types';
import { Metadata } from 'next';

const BlogPage = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchparams = await searchParams;
  return (
    <>
      <BlogsTable props={resolvedSearchparams} />
    </>
  );
};

export default BlogPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Blogs| SHRL',
};
// >> SEO End
