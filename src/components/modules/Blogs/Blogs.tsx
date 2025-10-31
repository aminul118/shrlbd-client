'use client';

import BlogPageLoading from '@/app/(root)/blogs/loading';
import DateFormat from '@/components/common/date-format';
import NotFound from '@/components/common/error/NotFound';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import { useGetAllBlogsQuery } from '@/redux/features/blog/blog.api';
import { IBlog } from '@/types';
import Image from 'next/image';

const Blogs = ({ props }: { props: Record<string, any> }) => {
  const params = { ...props };
  const { data, isLoading } = useGetAllBlogsQuery(params);

  if (isLoading) return <BlogPageLoading />;
  const blogs = data?.data || [];
  if (blogs.length === 0) return <NotFound title="Blogs Not Found" />;

  return (
    <Container>
      <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Blog key={blog._id} {...blog} />
        ))}
      </div>
    </Container>
  );
};

const Blog = ({ title, content, thumbnail, createdAt }: IBlog) => {
  return (
    <Card className="overflow-hidden pt-0">
      <div className="relative overflow-hidden">
        <Image
          src={thumbnail}
          width={400}
          height={200}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 xl:h-70"
        />
      </div>
      <CardContent>
        <CardTitle className="mb-1 text-lg font-semibold">{title}</CardTitle>
        <p className="text-xs text-gray-500">
          Post Date: <DateFormat date={createdAt} />
        </p>
        <p className="mt-2 text-sm dark:text-gray-200">
          {content.slice(0, 100)}...
        </p>
      </CardContent>
    </Card>
  );
};

export default Blogs;
