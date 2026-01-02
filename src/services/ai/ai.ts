'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IAiTraining } from '@/types';

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
  revalidate('blog');
  return res;
};

export { deleteSingleAi, getAis, getSingleAi };
