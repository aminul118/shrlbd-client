'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IAiTraining } from '@/types';
import { revalidateTag } from 'next/cache';

const getAis = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IAiTraining[]>>('/ai/get-all', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['ai'],
    },
  });
};

const getSingleAi = async (slug: string) => {
  const res = await serverFetch.get<ApiResponse<IAiTraining>>(`/ai/${slug}`);
  return res;
};

const deleteSingleAi = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<IAiTraining>>(`/ai/${slug}`);
  revalidateTag('blog', { expire: 0 });
  return res;
};

export { deleteSingleAi, getAis, getSingleAi };
