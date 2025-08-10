import config from '@/config';

const getScrollingText = async () => {
  const res = await fetch(`${config.baseUrl}/scrolling-text/get-all`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
};

export default getScrollingText;
