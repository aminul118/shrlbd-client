'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IJobType } from '@/types';

const createJobType = async (payload: Record<string, string>) => {
  const res = await serverFetch.post<ApiResponse<IJobType>>('/job/type', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  revalidate('job-type');
  return res;
};

const getJobTypes = async () => {
  const res = await serverFetch.get<ApiResponse<IJobType[]>>(`/job/types`, {
    cache: 'force-cache',
    next: {
      tags: ['job-type'],
    },
  });
  return res;
};

export { createJobType, getJobTypes };
