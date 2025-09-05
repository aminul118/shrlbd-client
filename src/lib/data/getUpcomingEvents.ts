import envVars from '@/config/env.config';

const getUpcomingEvents = async () => {
  const res = await fetch(`${envVars.baseUrl}/upcoming-event/get-all`, {
    cache: 'no-store', // ensures fresh fetch
  });

  if (!res.ok) {
    throw new Error('Failed to fetch upcoming events');
  }

  return await res.json();
};

export default getUpcomingEvents;
