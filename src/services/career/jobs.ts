'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IJob } from '@/types';
import { revalidateTag } from 'next/cache';

const getJobs = async (query: Record<string, string>) => {
  const res = await serverFetch.get<ApiResponse<IJob[]>>(`/job`, {
    query,
    next: {
      tags: ['jobs'],
    },
  });
  return res;
};

const getSingleJob = async (slug: string) => {
  const res = await serverFetch.get<ApiResponse<IJob>>(`/job/${slug}`);
  return res;
};

const deleteSingleJob = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<IJob>>(`/job/${slug}`);
  revalidateTag('jobs', '');
  return res;
};

export { deleteSingleJob, getJobs, getSingleJob };
