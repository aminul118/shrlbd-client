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

    // Registration
    registerForAdmin: builder.mutation({
      query: (userInfo) => ({
        url: '/user/admin/register',
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

    // Reset Password
    resetPassword: builder.mutation({
      query: (payload) => ({
        url: '/auth/reset-password',
        method: 'POST',
        data: payload,
        headers: {
          Authorization: `${payload.token}`,
        },
      }),
      invalidatesTags: ['USER'],
    }),
    // Change Password
    changePassword: builder.mutation({
      query: (payload) => ({
        url: '/auth/change-password',
        method: 'POST',
        data: payload,
      }),
      invalidatesTags: ['USER'],
    }),

    // set Password
    setPassword: builder.mutation({
      query: (payload) => ({
        url: '/auth/set-password',
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

    updateRole: builder.mutation({
      query: ({
        userInfo,
        id,
      }: {
        userInfo: { role: string };
        id: string;
      }) => ({
        url: `/user/update-role/${id}`,
        method: 'PATCH',
        data: userInfo,
      }),
      invalidatesTags: ['USER'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRegisterForAdminMutation,
  useResetPasswordMutation,
  useSetPasswordMutation,
  useForgotPasswordMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useUserInfoQuery,
  useLogoutMutation,
  useAllUsersInfoQuery,
  useUpdateRoleMutation,
  useChangePasswordMutation,
} = authApi;
