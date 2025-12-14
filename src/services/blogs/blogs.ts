'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IBlog } from '@/types';
import { revalidateTag } from 'next/cache';

const getBlogs = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IBlog[]>>('/blog', {
    query,
    next: {
      tags: ['blog'],
    },
  });
};

const getSingleBlog = async (slug: string) => {
  const res = await serverFetch.get<ApiResponse<IBlog>>(`/blog/${slug}`);
  return res;
};

const deleteSingleBlog = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<IBlog>>(`/blog/${slug}`);
  revalidateTag('blog', { expire: 0 });
  return res;
};

export { deleteSingleBlog, getBlogs, getSingleBlog };
