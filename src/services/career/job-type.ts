'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IJobType } from '@/types';

const getJobTypes = async () => {
  const res = await serverFetch.get<ApiResponse<IJobType[]>>(`/job/types`, {
    cache: 'force-cache',
    next: {
      tags: ['job-type'],
    },
  });
  return res;
};

export { getJobTypes };
