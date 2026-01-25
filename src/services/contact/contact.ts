'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IContact } from '@/types';

const contactAction = async (payload: Record<string, string>) => {
  const { token, ...formData } = payload;

  //  Step 1 — verify captcha FIRST
  const verifyRes = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
      cache: 'no-store',
    },
  );

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    throw new Error('Bot detected. Please try again.');
  }

  //  Step 2 — only real users reach here
  const res = await serverFetch.post<ApiResponse<IContact>>('/contact', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  return res;
};

export { contactAction };
