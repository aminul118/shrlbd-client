'use server';

import baseCookieOption from '@/config/cookie.config';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

const logOut = async () => {
  const cookieStore = cookies();

  (await cookieStore).delete({
    name: 'accessToken',
    path: baseCookieOption.path,
    domain: baseCookieOption.domain,
  });

  (await cookieStore).delete({
    name: 'refreshToken',
    path: baseCookieOption.path,
    domain: baseCookieOption.domain,
  });

  revalidateTag('ME', 'max');

  return {
    success: true,
    message: 'Logged out successfully',
  };
};

export { logOut };
