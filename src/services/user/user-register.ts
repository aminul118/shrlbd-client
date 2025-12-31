'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IUser } from '@/types';
import { ActionError } from '@/utils/serverResponse';

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
    });

    return {
      success: true,
      data: res.data,
      message: res.message,
    };
  } catch (error: any) {
    return ActionError(false, null, error?.message || 'Something went wrong');
  }
};

export { registerAction };
