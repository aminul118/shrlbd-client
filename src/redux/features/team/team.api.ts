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
    // Update - Team
    updateTeamMember: builder.mutation({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: ({ member, id }: { member: any; id: string }) => ({
        url: `/team/${id}`,
        method: 'PUT',
        data: member,
      }),
      invalidatesTags: ['TEAM'],
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
  useUpdateTeamMemberMutation,
  useGetAllTeamMembersQuery,
  useDeleteTeamMemberMutation,
} = teamApi;
