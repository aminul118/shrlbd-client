import config from '@/config';

const getScrollingText = async () => {
  const res = await fetch(`${config.baseUrl}/scrolling-text/get-all`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};

export default getScrollingText;
