'use client';

import ManagementTable from '@/components/common/table/ManageMentTable';
import { IBlog } from '@/types';
import BlogsColum from './BlogsColum';

const BlogsTable = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <ManagementTable
      columns={BlogsColum}
      data={blogs}
      getRowKey={(b) => b._id}
      emptyMessage="No blog post found"
    />
  );
};

export default BlogsTable;
