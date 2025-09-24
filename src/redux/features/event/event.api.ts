import baseApi from '@/redux/baseApi';
import { ApiResponse, IEvent } from '@/types';

const eventApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // POST - Add Regular Event
    addEvent: builder.mutation({
      query: (eventInfo) => ({
        url: '/event/create',
        method: 'POST',
        data: eventInfo,
      }),
      invalidatesTags: ['EVENT'],
    }),

    // GET - Get All Events
    getEvent: builder.query<ApiResponse<IEvent[]>, Record<string, string>>({
      query: (params) => ({
        url: '/event/get-all',
        method: 'GET',
        params,
      }),
      providesTags: ['EVENT'],
    }),

    // DELETE - Delete Upcoming Event
    deleteEvent: builder.mutation({
      query: (slug) => ({
        url: `/event/${slug}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['EVENT'],
    }),

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
    getUpcomingEvents: builder.query({
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
  useAddEventMutation,
  useGetEventQuery,
  useDeleteEventMutation,
  useAddUpcomingEventMutation,
  useGetUpcomingEventsQuery,
  useUpdateUpcomingEventMutation,
  useDeleteUpcomingEventMutation,
} = eventApi;
