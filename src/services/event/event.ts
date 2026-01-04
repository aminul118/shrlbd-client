'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IEvent } from '@/types';

const createEvent = async (formData: FormData) => {
  const body = new FormData();

  // pass JSON data
  body.append('data', formData.get('data') as string);

  // get ALL files, not just one
  const files = formData.getAll('files') as File[];

  files.forEach((file) => {
    body.append('files', file);
  });

  const res = await serverFetch.post<ApiResponse<IEvent>>('/event/create', {
    body,
  });

  revalidate('events');
  return res;
};
const updateEvent = async (formData: FormData, slug: string) => {
  const body = new FormData();

  // pass JSON data
  body.append('data', formData.get('data') as string);

  // get ALL files, not just one
  const files = formData.getAll('files') as File[];

  files.forEach((file) => {
    body.append('files', file);
  });

  const res = await serverFetch.post<ApiResponse<IEvent>>(`/event/${slug}`, {
    body,
  });

  revalidate('events');
  return res;
};

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

const deleteSingleEvent = async (id: string) => {
  const res = await serverFetch.delete<ApiResponse<IEvent>>(`/event/${id}`);
  revalidate('events');
  return res;
};

export {
  createEvent,
  deleteSingleEvent,
  getEvents,
  getSingleEvent,
  updateEvent,
};
