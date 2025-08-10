import config from '@/config';

const getAllEventsDone = async () => {
  const res = await fetch(`${config.baseUrl}/events`);

  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }

  const data = await res.json();
  return data;
};

export default getAllEventsDone;
