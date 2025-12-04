'use client';

import BlogPageLoading from '@/app/(root)/blogs/loading';
import NotFound from '@/components/common/error/NotFound';
import Container from '@/components/ui/Container';
import useSearchParamsValues from '@/hooks/useSearchParamsValues';
import { useGetAllBlogsQuery } from '@/redux/features/blog/blog.api';

import BlogCard from './BlogCard';

const Blogs = () => {
  const params = useSearchParamsValues('page', 'limit', 'search');

  const { data, isLoading } = useGetAllBlogsQuery(params);

  if (isLoading) return <BlogPageLoading />;
  const blogs = data?.data || [];
  if (blogs.length === 0) return <NotFound title="Blogs Not Found" />;

  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>
    </Container>
  );
};

export default Blogs;
