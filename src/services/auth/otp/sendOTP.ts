'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse } from '@/types';
import { ActionError } from '@/utils/serverResponse';

const sendOTP = async (email: string | null) => {
  try {
    const payload = {
      email,
    };

    const res = await serverFetch.post<ApiResponse<null>>('/otp/re-send', {
      body: JSON.stringify(payload),
    });
    return res;
  } catch (error) {
    return ActionError(false, null, 'Wrong OTP');
  }
};

export { sendOTP };
