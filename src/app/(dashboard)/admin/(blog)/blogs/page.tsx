import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import BlogsTable from '@/components/modules/Admin/blogs/BlogsTable';
import { Button } from '@/components/ui/button';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getBlogs } from '@/services/blogs/blogs';
import { SearchParams } from '@/types';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

const BlogPage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getBlogs(params);

  return (
    <>
      <ClientTableWrapper
        tableTitle="All Blogs"
        meta={meta}
        action={
          <Button asChild>
            <Link href="/admin/add-blog">
              <Plus /> Add Blog
            </Link>
          </Button>
        }
      >
        <TableFilters />
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
