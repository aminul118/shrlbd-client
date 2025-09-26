'use server';

import { apiDelete, apiPost } from '@/lib/apiClient';
import { ApiResponse, IScrollingText } from '@/types';

export const createScrollingText = async (body: Partial<IScrollingText>) => {
  return apiPost<Partial<IScrollingText>, ApiResponse<IScrollingText>>({
    endpoint: '/scrolling-text/create',
    data: body,
    tag: 'scrolling-text',
  });
};

export const deleteScrollingText = async (param: string) => {
  return await apiDelete<ApiResponse<IScrollingText>>({
    endpoint: `/scrolling-text/${param}`,
    tag: 'scrolling-text',
  });
};
