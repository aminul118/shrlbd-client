'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IEvent } from '@/types';
import { revalidateTag } from 'next/cache';

const getEvents = async (query: Record<string, string>) => {
  const res = await serverFetch.get<ApiResponse<IEvent[]>>('/event', {
    query,
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
  revalidateTag('events', { expire: 0 });
  return res;
};

export { deleteSingleEvent, getEvents, getSingleEvent };
