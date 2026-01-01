'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';
import { ActionError } from '@/utils/serverResponse';

const setPassword = async (formData: FormData) => {
  try {
    const payload = {
      newPassword: formData.get('newPassword'),
    };
    return await serverFetch.post<ApiResponse<null>>('/auth/set-password', {
      body: JSON.stringify(payload),
    });
  } catch (error: any) {
    ActionError(false, null, error.message);
  }
};

export { setPassword };
