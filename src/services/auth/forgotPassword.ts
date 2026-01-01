'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';
import { ActionError } from '@/utils/serverResponse';

const forgotPassword = async (formData: FormData) => {
  try {
    const payload = {
      email: formData.get('email'),
    };
    return await serverFetch.post<ApiResponse<null>>('/auth/forgot-password', {
      body: JSON.stringify(payload),
    });
  } catch (error: any) {
    ActionError(false, null, error.message);
  }
};

export { forgotPassword };
