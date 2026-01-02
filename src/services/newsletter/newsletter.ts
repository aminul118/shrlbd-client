'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ActionError } from '@/lib/serverResponse';

const newsLetterSubscribe = async (formData: FormData) => {
  const payload = {
    email: formData.get('email'),
  };
  try {
    const res = await serverFetch.post('/subscribe', {
      body: JSON.stringify(payload),
    });
    revalidate('subscribe');
    return res;
  } catch (error) {
    ActionError(false, null, 'Something Went Wrong');
  }
};

const getAllNewsLetterSubscriber = async () => {
  const res = await serverFetch.get('/subscribe');

  return res;
};

export { getAllNewsLetterSubscriber, newsLetterSubscribe };
