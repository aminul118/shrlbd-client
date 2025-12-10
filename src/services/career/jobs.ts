import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IJob } from '@/types';

const getJobs = async (query: Record<string, any>) => {
  return await serverFetch.get<ApiResponse<IJob[]>>(`/job`, {
    query,
  });
};
const getSingleJob = async (slug: string) => {
  return await serverFetch.get<ApiResponse<IJob>>(`/job/${slug}`);
};

export { getJobs, getSingleJob };
