'use server';

import serverFetch from '@/lib/server-fetch';
import { ActionError } from '@/lib/serverResponse';
import { ApiResponse, IUser } from '@/types';

const registerAction = async (formData: FormData) => {
  try {
    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      password: formData.get('password'),
    };

    const res = await serverFetch.post<ApiResponse<IUser>>('/user/register', {
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res;
  } catch (error: any) {
    return ActionError(false, null, error?.message || 'Something went wrong');
  }
};

const registerUserFromAdmin = async (formData: FormData) => {
  try {
    const payload = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      password: formData.get('password'),
    };

    const res = await serverFetch.post<ApiResponse<IUser>>(
      '/user/admin/register',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      },
    );

    return res;
  } catch (error: any) {
    return ActionError(false, null, error?.message || 'Something went wrong');
  }
};

export { registerAction, registerUserFromAdmin };
