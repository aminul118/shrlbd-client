import { apiPost } from '@/lib/apiClient';
import { ApiResponse, IUpcomingEvent } from '@/types';

export const createUpcomingEvent = async (body: Partial<IUpcomingEvent>) => {
  return apiPost<Partial<IUpcomingEvent>, ApiResponse<IUpcomingEvent>>({
    endpoint: '/upcoming-event/create',
    data: body,
    tag: 'upcoming-events',
  });
};
export const deleteUpcomingEvent = async (body: Partial<IUpcomingEvent>) => {
  return apiPost<Partial<IUpcomingEvent>, ApiResponse<IUpcomingEvent>>({
    endpoint: '/upcoming-event/create',
    data: body,
    tag: 'upcoming-events',
  });
};
