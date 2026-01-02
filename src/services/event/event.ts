'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IEvent } from '@/types';

const getEvents = async (query: Record<string, string>) => {
  const res = await serverFetch.get<ApiResponse<IEvent[]>>('/event', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['events'],
    },
  });

  return res;
};

const getSingleEvent = async (slug: string) => {
  const res = await serverFetch.get<ApiResponse<IEvent>>(`/event/${slug}`);
  return res;
};

const deleteSingleEvent = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<IEvent>>(`/event/${slug}`);
  revalidate('events');
  return res;
};

export { deleteSingleEvent, getEvents, getSingleEvent };
