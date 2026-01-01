'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';
import { ActionError } from '@/utils/serverResponse';

const changePassword = async (formData: FormData) => {
  try {
    const payload = {
      oldPassword: formData.get('oldPassword'),
      newPassword: formData.get('newPassword'),
    };
    return await serverFetch.post<ApiResponse<null>>('/auth/change-password', {
      body: JSON.stringify(payload),
    });
  } catch (error: any) {
    ActionError(false, null, error.message);
  }
};

export { changePassword };
