/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiGet } from '@/lib/apiClient';
import { ApiResponse, IEvent } from '@/types';

export const getEvents = async (params?: Record<string, any>) => {
  return await apiGet<ApiResponse<IEvent[]>>(`/event/get-all`, params);
};

export const getSingleEvent = async (
  slug: string,
  params?: Record<string, any>,
) => {
  return await apiGet<ApiResponse<IEvent>>(`/event/${slug}`, params);
};
