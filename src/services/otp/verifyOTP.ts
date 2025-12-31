'use server';

import baseCookieOption from '@/config/cookie.config';
import envVars from '@/config/env.config';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IUser } from '@/types';
import { ActionError } from '@/utils/serverResponse';
import { cookies } from 'next/headers';

interface IOtp {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export const verifyOTP = async (formData: FormData) => {
  try {
    const payload = {
      email: formData.get('email'),
      otp: formData.get('otp'),
    };

    const res = await serverFetch.post<ApiResponse<IOtp | null>>(
      '/otp/verify',
      {
        body: JSON.stringify(payload),
      },
    );

    if (!res.success || !res.data) {
      return ActionError(false, null, res.message || 'Invalid OTP');
    }

    const { accessToken, refreshToken, user } = res.data;
    const cookieStore = cookies();

    (await cookieStore).set('accessToken', accessToken, {
      ...baseCookieOption,
      maxAge: Number(envVars.jwt.accessTokenMaxAge),
    });

    (await cookieStore).set('refreshToken', refreshToken, {
      ...baseCookieOption,
      maxAge: Number(envVars.jwt.refreshTokenMaxAge),
    });

    return {
      success: true,
      user,
      message: 'Login successful',
    };
  } catch {
    return ActionError(false, null, 'Wrong OTP');
  }
};
