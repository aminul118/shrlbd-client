/* eslint-disable @typescript-eslint/no-explicit-any */
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IEvent } from '@/types';

const getEvents = async (query: Record<string, any>) => {
  return await serverFetch.get<ApiResponse<IEvent[]>>('/event', {
    query,
  });
};

const getSingleEvent = async (slug: string) => {
  return await serverFetch.get<ApiResponse<IEvent>>(`/event/${slug}`);
};

export { getEvents, getSingleEvent };
