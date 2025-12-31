import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import BlogsFilters from '@/components/modules/Admin/blogs/BlogFilter';
import BlogsTable from '@/components/modules/Admin/blogs/BlogsTable';
import { getBlogs } from '@/services/blogs/blogs';
import { SearchParams } from '@/types';
import cleanSearchParams from '@/utils/cleanSearchParams';
import { Metadata } from 'next';

const BlogPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getBlogs(params);

  return (
    <>
      <ClientTableWrapper
        tableTitle="All Blogs"
        meta={meta}
        filters={<BlogsFilters />}
      >
        <BlogsTable blogs={data} />
      </ClientTableWrapper>
    </>
  );
};

export default BlogPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Blogs| SHRL',
};
// >> SEO End
