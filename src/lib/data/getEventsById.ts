import config from '@/config';

const getEventsById = async (id: string) => {
  if (!config.baseUrl) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not defined');
  }

  const res = await fetch(`${config.baseUrl}/event/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch team member details.');
  }

  const data = await res.json();
  return data;
};

export default getEventsById;
