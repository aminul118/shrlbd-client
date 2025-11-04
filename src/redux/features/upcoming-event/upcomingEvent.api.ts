import baseApi from '@/redux/baseApi';
import { ApiResponse, IUpcomingEvent } from '@/types';

const upcomingEventApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // POST - Add Upcoming Event
    addUpcomingEvent: builder.mutation({
      query: (eventInfo) => ({
        url: '/upcoming-event/create',
        method: 'POST',
        data: eventInfo,
      }),
      invalidatesTags: ['UPCOMING-EVENT'],
    }),

    // PATCH - Update Upcoming Event
    updateUpcomingEvent: builder.mutation({
      query: ({ id, data }) => ({
        url: `/upcoming-event/${id}`,
        method: 'PATCH', // or PUT depending on your backend
        data,
      }),
      invalidatesTags: ['UPCOMING-EVENT'],
    }),

    // GET - Get All Upcoming Events
    getUpcomingEvents: builder.query<
      ApiResponse<IUpcomingEvent[]>,
      Record<string, string>
    >({
      query: (params) => ({
        url: '/upcoming-event/get-all',
        method: 'GET',
        params,
      }),
      providesTags: ['UPCOMING-EVENT'],
    }),

    // DELETE - Delete Upcoming Event
    deleteUpcomingEvent: builder.mutation({
      query: (id) => ({
        url: `/upcoming-event/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['UPCOMING-EVENT'],
    }),
  }),
});

export const {
  useAddUpcomingEventMutation,
  useGetUpcomingEventsQuery,
  useUpdateUpcomingEventMutation,
  useDeleteUpcomingEventMutation,
} = upcomingEventApi;
