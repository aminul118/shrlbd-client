'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IAiTraining } from '@/types';

const createAi = async (payload: Record<string, string>) => {
  const res = await serverFetch.post<ApiResponse<IAiTraining>>('/ai/create', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  revalidate('ai');
  return res;
};

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
  return await serverFetch.get<ApiResponse<IAiTraining>>(`/ai/${slug}`);
};

const deleteSingleAi = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<IAiTraining>>(`/ai/${slug}`);
  revalidate('ai');
  return res;
};

export { createAi, deleteSingleAi, getAis, getSingleAi };
