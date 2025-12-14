'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IScrollingText } from '@/types';
import { revalidateTag } from 'next/cache';

const getScrollingText = async (query?: Record<string, string>) => {
  const res = await serverFetch.get<ApiResponse<IScrollingText[]>>(
    '/scrolling-text',
    {
      query,
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

const createScrollingText = async (payload: Partial<IScrollingText>) => {
  const res = await serverFetch.post<ApiResponse<IScrollingText>>(
    '/scrolling-text/create',
    {
      body: JSON.stringify(payload),
    },
  );

  revalidateTag('scrolling-text', { expire: 0 });

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

  revalidateTag('scrolling-text', { expire: 0 });

  return res;
};

const deleteScrollingText = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<IScrollingText>>(
    `/scrolling-text/${slug}`,
  );

  revalidateTag('scrolling-text', { expire: 0 });

  return res;
};

export {
  createScrollingText,
  deleteScrollingText,
  getScrollingText,
  getSingleScrollingText,
  updateScrollingText,
};
