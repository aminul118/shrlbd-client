import DateFormat from '@/components/common/date-format';
import NotFound from '@/components/common/error/NotFound';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IBlog } from '@/types';
import Image from 'next/image';
import BlogActions from './BlogActions';

const BlogsTable = ({ blogs }: { blogs: IBlog[] }) => {
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
        {blogs?.length === 0 ? (
          <TableRow className="hover:bg-primary/10">
            <TableCell colSpan={5} className="py-4 text-center">
              <NotFound />
            </TableCell>
          </TableRow>
        ) : (
          blogs.map((blog, i) => (
            <TableRow key={blog._id || i} className="hover:bg-primary/10">
              <TableCell>{i + 1}</TableCell>

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

              <TableCell>{blog.title}</TableCell>

              <TableCell>
                <DateFormat date={blog.createdAt} />
              </TableCell>

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

export default BlogsTable;
