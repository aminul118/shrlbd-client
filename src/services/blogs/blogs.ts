'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IBlog } from '@/types';

const getBlogs = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IBlog[]>>('/blog', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['blog'],
    },
  });
};

const getSingleBlog = async (slug: string) => {
  return await serverFetch.get<ApiResponse<IBlog>>(`/blog/${slug}`);
};

const deleteSingleBlog = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<IBlog>>(`/blog/${slug}`);
  revalidate('blog');
  return res;
};

export { deleteSingleBlog, getBlogs, getSingleBlog };
