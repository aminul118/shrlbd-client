import config from '@/config';

const getAllEventsDone = async () => {
  const res = await fetch(`${config.baseUrl}/events`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  return await res.json();
};

export default getAllEventsDone;
