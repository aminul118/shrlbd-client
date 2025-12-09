'use server';

import envVars from '@/config/env.config';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IUser } from '@/types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getDefaultDashboardRoute, UserRole } from './user-access';

interface ILogin {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export type LoginResult = {
  success: boolean;
  error?: string;
};

export const loginAction = async (formData: FormData) => {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const res = await serverFetch.post<ApiResponse<ILogin>>('/auth/login', {
      body: JSON.stringify({ email, password }),
    });

    if (!res?.data) {
      return { success: false, error: 'Invalid server response' };
    }

    const { accessToken, refreshToken, user } = res.data;

    const cookieStore = await cookies();

    cookieStore.set('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      path: '/',
    });

    cookieStore.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      path: '/',
    });

    // after setting cookies → redirect
    return redirect(getDefaultDashboardRoute(user.role as UserRole));
  } catch (error: any) {
    console.log('ERROR==>', error);
    // Re-throw NEXT_REDIRECT errors so Next.js can handle them
    if (error?.digest?.startsWith('NEXT_REDIRECT')) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${envVars.nodeEnv === 'development' ? error.message : 'Login Failed. You might have entered incorrect email or password.'}`,
    };
  }
};
