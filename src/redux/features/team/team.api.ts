import baseApi from '@/redux/baseApi';
import { ApiResponse, ITeamMember } from '@/types';

const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // POST - Add Team Member
    addTeamMember: builder.mutation({
      query: (teamInfo) => ({
        url: '/team/create',
        method: 'POST',
        data: teamInfo,
      }),
      invalidatesTags: ['TEAM'],
    }),
    // GET - Get All Upcoming Events
    getAllTeamMembers: builder.query<ApiResponse<ITeamMember[]>, unknown>({
      query: (params) => ({
        url: '/team/get-all',
        method: 'GET',
        params,
      }),
      providesTags: ['TEAM'],
    }),
    // POST - Add Regular Event
    updateTeamMember: builder.mutation({
      query: (eventInfo) => ({
        url: '/event/create',
        method: 'POST',
        data: eventInfo,
      }),
      invalidatesTags: ['EVENT'],
    }),

    // DELETE - Delete Upcoming Event
    deleteTeamMember: builder.mutation({
      query: (slug) => ({
        url: `/team/${slug}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['TEAM'],
    }),
  }),
});

export const {
  useAddTeamMemberMutation,
  useGetAllTeamMembersQuery,
  useDeleteTeamMemberMutation,
} = teamApi;
