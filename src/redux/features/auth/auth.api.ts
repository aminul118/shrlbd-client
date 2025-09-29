import { baseApi } from '@/redux/baseApi';
import { ApiResponse } from '@/types';
import { IUser } from '@/types/apiData.types';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //  Login
    login: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/login',
        method: 'POST',
        data: userInfo,
      }),
      invalidatesTags: ['USER'],
    }),

    // Log out
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['USER'],
    }),

    // Registration
    register: builder.mutation({
      query: (userInfo) => ({
        url: '/user/register',
        method: 'POST',
        data: userInfo,
      }),
      invalidatesTags: ['USER'],
    }),

    // Forgot Password
    forgotPassword: builder.mutation({
      query: (payload) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        data: payload,
      }),
      invalidatesTags: ['USER'],
    }),

    // Send OTP
    sendOtp: builder.mutation({
      query: (userInfo) => ({
        url: '/otp/send',
        method: 'POST',
        data: userInfo,
      }),
    }),

    // Verify OTP
    verifyOtp: builder.mutation({
      query: (userInfo) => ({
        url: '/otp/verify',
        method: 'POST',
        data: userInfo,
      }),
    }),

    // User Info
    userInfo: builder.query({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      }),
      providesTags: ['USER'],
    }),
    // User Info
    allUsersInfo: builder.query<ApiResponse<IUser[]>, unknown>({
      query: (params) => ({
        url: '/user/all-users',
        method: 'GET',
        params,
      }),
      providesTags: ['USER'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useUserInfoQuery,
  useLogoutMutation,
  useAllUsersInfoQuery,
} = authApi;
