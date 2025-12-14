import TablePagination from '@/components/common/pagination/TablePagination';
import BlogsFilters from '@/components/modules/Admin/blogs/BlogFilter';
import BlogsTable from '@/components/modules/Admin/blogs/BlogsTable';
import Container from '@/components/ui/Container';
import GradientTitle from '@/components/ui/gradientTitle';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getBlogs } from '@/services/blogs/blogs';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

const BlogPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getBlogs(params);

  return (
    <>
      <Container>
        <div className="mb-4 flex items-center justify-between">
          <GradientTitle title="All Blogs" />
        </div>
        <BlogsFilters />
        <BlogsTable blogs={data} />
        <TablePagination meta={meta} />
      </Container>
    </>
  );
};

export default BlogPage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Blogs| SHRL',
};
// >> SEO End
