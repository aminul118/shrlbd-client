'use client';

import DateFormat from '@/components/common/date-format';
import NotFound from '@/components/common/error/NotFound';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import TableSkeleton from '@/components/common/loader/TableSkeleton';
import AppPagination from '@/components/common/pagination/AppPagination';
import GoToPage from '@/components/common/pagination/GoToPage';
import PageLimit from '@/components/common/pagination/PageLimit';
import PaginationStatus from '@/components/common/pagination/PaginationStatus';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import GradientTitle from '@/components/ui/gradientTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetAllBlogsQuery } from '@/redux/features/blog/blog.api';
import { IBlog, IMeta } from '@/types';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import BlogActions from './BlogActions';

const BlogsTable = ({ props }: { props: Record<string, any> }) => {
  const params = { ...props };
  const { data, isLoading } = useGetAllBlogsQuery(params);

  const blogs: IBlog[] = data?.data || [];
  const meta: IMeta | undefined = data?.meta;

  if (isLoading) return <TableSkeleton />;

  return (
    <Container>
      <div className="mb-4 flex items-center justify-between">
        <GradientTitle title="All Blogs" />
      </div>
      <BlogsFilter />
      <TableCreate blogs={blogs} />
      <BlogsPagination meta={meta} />
    </Container>
  );
};

/* -------------------------------
    Table Component
--------------------------------*/
const TableCreate = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <Table>
      <TableHeader className="bg-muted">
        <TableRow>
          <TableHead>SI</TableHead>
          <TableHead>Photo</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Date & Time</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {!blogs?.length ? (
          <TableRow className="hover:bg-primary/10">
            <TableCell colSpan={5} className="py-4 text-center">
              <NotFound />
            </TableCell>
          </TableRow>
        ) : (
          blogs.map((blog, i) => (
            <TableRow key={blog._id || i} className="hover:bg-primary/10">
              <TableCell>{i + 1}</TableCell>

              {/* Thumbnail */}
              <TableCell>
                {blog.thumbnail ? (
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    width={60}
                    height={60}
                    className="h-12 w-12 rounded-md object-cover"
                  />
                ) : (
                  <span className="text-gray-400">No Photo</span>
                )}
              </TableCell>

              {/* Title */}
              <TableCell>{blog.title}</TableCell>

              {/* Date */}
              <TableCell>
                <DateFormat date={blog.createdAt} />
              </TableCell>

              {/* Actions */}
              <TableCell className="text-center">
                <BlogActions blog={blog} />
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

/* -------------------------------
    Filter Section
--------------------------------*/
const BlogsFilter = () => {
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between gap-2">
        <AppSearching />
        <div className="flex items-center justify-between gap-2">
          <PageLimit pageNumbers={[10, 20, 30, 40]} />
          <Sorting
            sortOptions={[
              { name: 'Ascending', value: '-createdAt' },
              { name: 'Descending', value: 'createdAt' },
            ]}
          />
          <ClearAllFilter />
          <Button asChild>
            <Link href="/admin/add-blog">
              <Plus /> Add Blog
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------
    Pagination Section
--------------------------------*/
const BlogsPagination = ({ meta }: { meta?: IMeta }) => {
  if (!meta) return null;

  return (
    <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
      <GoToPage totalPage={meta.totalPage} />
      <div className="flex items-center gap-4">
        <PaginationStatus meta={meta} />
        <AppPagination className="justify-end" meta={meta} />
      </div>
    </div>
  );
};

export default BlogsTable;
