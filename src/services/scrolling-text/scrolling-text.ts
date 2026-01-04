'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IScrollingText } from '@/types';

const createScrollingText = async (payload: Record<string, string>) => {
  const res = await serverFetch.post<ApiResponse<IScrollingText>>(
    '/scrolling-text/create',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );
  revalidate('scrolling-text');
  return res;
};

const getScrollingText = async (query?: Record<string, string>) => {
  const res = await serverFetch.get<ApiResponse<IScrollingText[]>>(
    '/scrolling-text',
    {
      query,
      cache: 'force-cache',
      next: {
        tags: ['scrolling-text'],
      },
    },
  );
  return res;
};

const getSingleScrollingText = async (slug: string) => {
  const res = await serverFetch.get<ApiResponse<IScrollingText>>(
    `/scrolling-text/${slug}`,
  );
  return res;
};

const updateScrollingText = async (
  slug: string,
  payload: Partial<IScrollingText>,
) => {
  const res = await serverFetch.put<ApiResponse<IScrollingText>>(
    `/scrolling-text/${slug}`,
    {
      body: JSON.stringify(payload),
    },
  );

  revalidate('scrolling-text');

  return res;
};

const deleteScrollingText = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<IScrollingText>>(
    `/scrolling-text/${slug}`,
  );

  revalidate('scrolling-text');

  return res;
};

export {
  createScrollingText,
  deleteScrollingText,
  getScrollingText,
  getSingleScrollingText,
  updateScrollingText,
};
