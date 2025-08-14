import config from '@/config';
import { ApiResponse } from '@/types';
import { IEvent } from './getEvents';

const getEventsById = async (slug: string): Promise<ApiResponse<IEvent>> => {
  if (!config.baseUrl) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not defined');
  }

  const res = await fetch(`${config.baseUrl}/event/${slug}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch team member details.');
  }

  const data = await res.json();
  return data;
};

export default getEventsById;
