'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IUpcomingEvent } from '@/types';

const createUpcomingEvent = async (formData: FormData) => {
  const body = new FormData();
  body.append('data', formData.get('data') as string);
  const file = formData.get('file') as File | null;
  if (file) {
    body.append('file', file);
  }

  const res = await serverFetch.post<ApiResponse<IUpcomingEvent>>(
    '/upcoming-event',
    {
      body,
    },
  );

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
        tags: ['upcoming-event'],
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

const deleteUpcomingEvent = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<IUpcomingEvent>>(
    `/upcoming-event/${slug}`,
  );
  revalidate('upcoming-event');
  return res;
};

export {
  createUpcomingEvent,
  deleteUpcomingEvent,
  getSingleUpcomingEvent,
  getUpcomingEvents,
};
