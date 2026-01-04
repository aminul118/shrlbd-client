'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IJob } from '@/types';

const createJob = async (payload: Record<string, string>) => {
  const res = await serverFetch.post<ApiResponse<IJob>>('/job', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  revalidate('jobs');
  return res;
};

const getJobs = async (query: Record<string, string>) => {
  const res = await serverFetch.get<ApiResponse<IJob[]>>(`/job`, {
    query,
    cache: 'force-cache',
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
  revalidate('jobs');
  return res;
};

export { createJob, deleteSingleJob, getJobs, getSingleJob };
