import baseApi from '@/redux/baseApi';
import { ApiResponse } from '@/types';
import { ITeamJoinRequest } from '@/types/apiData.types';

const joinTeamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendTeamJoinRequest: builder.mutation({
      query: (payload) => ({
        url: '/join-team/create',
        method: 'POST',
        data: payload,
      }),
      invalidatesTags: ['JOIN-TEAM'],
    }),
    teamJoinRequest: builder.query<ApiResponse<ITeamJoinRequest[]>, unknown>({
      query: (params) => ({
        url: '/join-team',
        method: 'GET',
        params,
      }),
      providesTags: ['JOIN-TEAM'],
    }),
    // Single Team Request
    singleTeamJoinRequest: builder.query({
      query: (slug) => ({
        url: `/join-team/${slug}`,
        method: 'GET',
      }),
      providesTags: ['JOIN-TEAM'],
    }),
    // Email Send
    sendParticipantEmail: builder.mutation({
      query: (emailData) => ({
        url: '/join-team/admin-message',
        method: 'POST',
        data: emailData,
      }),
    }),

    deleteJoinRequest: builder.mutation({
      query: (id) => ({
        url: `/join-team/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['JOIN-TEAM'],
    }),
  }),
});

export const {
  useSendTeamJoinRequestMutation,
  useTeamJoinRequestQuery,
  useSingleTeamJoinRequestQuery,
  useSendParticipantEmailMutation,
  useDeleteJoinRequestMutation,
} = joinTeamApi;
