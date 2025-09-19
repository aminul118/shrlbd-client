/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiGet } from '@/lib/apiClient';
import { ApiResponse, IScrollingText } from '@/types';

export const getScrollingText = async (params?: Record<string, any>) => {
  return await apiGet<ApiResponse<IScrollingText[]>>(
    `/scrolling-text/get-all`,
    params,
  );
};
