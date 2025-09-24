import { baseApi } from '@/redux/baseApi';

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
    allUsersInfo: builder.query({
      query: () => ({
        url: '/user/all-users',
        method: 'GET',
      }),
      providesTags: ['USER'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useUserInfoQuery,
  useLogoutMutation,
  useAllUsersInfoQuery,
} = authApi;
