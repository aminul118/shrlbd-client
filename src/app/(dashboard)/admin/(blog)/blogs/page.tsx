import BlogsTable from '@/components/modules/Admin/blogs/BlogsTable';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const BlogPage = async ({ searchParams }: SearchParams) => {
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
