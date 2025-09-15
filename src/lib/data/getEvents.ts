import envVars from '@/config/env.config';
import { ApiResponse } from '@/types';

export interface IEvent {
  _id: string;
  title: string;
  photos: string[];
  content: string;
  slug: string;
  createdAt: string;
}

const getEvents = async (): Promise<ApiResponse<IEvent[]>> => {
  const res = await fetch(`${envVars.baseUrl}/event/get-all`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  return await res.json();
};

export default getEvents;
