/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiGet } from '@/lib/apiClient';
import { ApiResponse, IJob } from '@/types';

export const getSingleJob = async (
  slug: string,
  params?: Record<string, any>,
) => {
  return await apiGet<ApiResponse<IJob>>(`/job/${slug}`, params);
};
