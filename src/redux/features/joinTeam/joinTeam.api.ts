import baseApi from '@/redux/baseApi';

const joinTeamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // POST
    sendTeamJoinRequest: builder.mutation({
      query: (payload) => ({
        url: '/join-team/create',
        method: 'POST',
        data: payload,
      }),
    }),
    // GET - All
    teamJoinRequest: builder.query({
      query: () => ({
        url: `/join-team`,
        method: 'GET',
      }),
      providesTags: ['JOIN-TEAM'],
    }),
    // GET - SIngle one
    singleTeamJoinRequest: builder.query({
      query: (slug) => ({
        url: `/join-team/${slug}`,
        method: 'GET',
      }),
      providesTags: ['JOIN-TEAM'],
    }),

    // POST
    sendParticipantEmail: builder.mutation({
      query: (emailData) => ({
        url: '/join-team/admin-message',
        method: 'POST',
        data: emailData,
      }),
    }),

    // DELETE - Single Delete
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
