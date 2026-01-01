'use server';

import { revalidateTag } from 'next/cache';
import { removeAccessToken, removeRefreshToken } from './cookie-token';

const logOut = async () => {
  await removeAccessToken();
  await removeRefreshToken();

  revalidateTag('ME', 'max');

  return {
    success: true,
    message: 'Logged out successfully',
  };
};

export { logOut };
