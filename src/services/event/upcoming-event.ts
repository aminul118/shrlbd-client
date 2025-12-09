/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiGet } from '@/lib/apiClient';
import { ApiResponse, IUpcomingEvent } from '@/types';

export const getUpcomingEvents = async (params?: Record<string, any>) => {
  return await apiGet<ApiResponse<IUpcomingEvent[]>>(
    `/upcoming-event`,
    params,
    {
      next: {
        tags: ['upcoming-events'],
      },
    },
  );
};

export const getSingleUpcomingEvent = async (
  slug: string,
  params?: Record<string, any>,
) => {
  return await apiGet<ApiResponse<IUpcomingEvent>>(
    `/upcoming-event/${slug}`,
    params,
  );
};
