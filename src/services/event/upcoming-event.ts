'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IUpcomingEvent } from '@/types';
import { revalidateTag } from 'next/cache';

const createUpcomingEvent = async (payload: Partial<IUpcomingEvent>) => {
  const res = await serverFetch.post('/upcoming-event/create', {
    body: JSON.stringify(payload),
  });

  revalidateTag('upcoming-event', 'max');

  return createUpcomingEvent;
};

const deleteUpcomingEvent = async (slug: string) => {
  const res = await serverFetch.delete(`/upcoming-event/${slug}`);
  revalidateTag('upcoming-event', 'max');
  return res;
};

const getUpcomingEvents = async (query?: Record<string, string>) => {
  const res = await serverFetch.get<ApiResponse<IUpcomingEvent[]>>(
    `/upcoming-event`,
    {
      query,
      next: {
        tags: ['upcoming-events'],
      },
    },
  );
  return res;
};

const getSingleUpcomingEvent = async (slug: string) => {
  const res = await serverFetch.get<ApiResponse<IUpcomingEvent>>(
    `/upcoming-event/${slug}`,
  );
  return res;
};

export {
  createUpcomingEvent,
  deleteUpcomingEvent,
  getSingleUpcomingEvent,
  getUpcomingEvents,
};
