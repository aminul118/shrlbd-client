'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IUpcomingEvent } from '@/types';

const createUpcomingEvent = async (payload: Partial<IUpcomingEvent>) => {
  const res = await serverFetch.post('/upcoming-event/create', {
    body: JSON.stringify(payload),
  });

  revalidate('upcoming-event');

  return res;
};

const deleteUpcomingEvent = async (slug: string) => {
  const res = await serverFetch.delete(`/upcoming-event/${slug}`);
  revalidate('upcoming-event');
  return res;
};

const getUpcomingEvents = async (query?: Record<string, string>) => {
  const res = await serverFetch.get<ApiResponse<IUpcomingEvent[]>>(
    `/upcoming-event`,
    {
      query,
      cache: 'force-cache',
      next: {
        tags: ['upcoming-events'],
      },
    },
  );
  return res;
};

const getSingleUpcomingEvent = async (slug: string) => {
  return await serverFetch.get<ApiResponse<IUpcomingEvent>>(
    `/upcoming-event/${slug}`,
  );
};

export {
  createUpcomingEvent,
  deleteUpcomingEvent,
  getSingleUpcomingEvent,
  getUpcomingEvents,
};
