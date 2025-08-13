import config from '@/config';

const getUpcomingEvents = async () => {
  const res = await fetch(`${config.baseUrl}/upcoming-event/get-all`, {
    cache: 'no-store', // ensures fresh fetch
  });

  if (!res.ok) {
    throw new Error('Failed to fetch upcoming events');
  }

  return await res.json();
};

export default getUpcomingEvents;
