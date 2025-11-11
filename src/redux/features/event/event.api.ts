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
    getEvent: builder.query<ApiResponse<IEvent[]>, unknown>({
      query: (params) => ({
        url: '/event',
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
  }),
});

export const { useAddEventMutation, useGetEventQuery, useDeleteEventMutation } =
  eventApi;
