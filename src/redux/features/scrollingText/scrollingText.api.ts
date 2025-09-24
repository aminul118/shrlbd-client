import baseApi from '@/redux/baseApi';

const scrollingTextApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create scrolling text
    addScrollingText: builder.mutation({
      query: (eventInfo) => ({
        url: '/scrolling-text/create',
        method: 'POST',
        data: eventInfo,
      }),
      invalidatesTags: ['SCROLLING-TEXT'],
    }),

    // Update scrolling text by ID
    updateScrollingText: builder.mutation({
      query: ({ id, eventInfo }) => ({
        url: `/scrolling-text/${id}`,
        method: 'PUT',
        data: eventInfo,
      }),
      invalidatesTags: ['SCROLLING-TEXT'],
    }),

    // Delete scrolling text by ID
    deleteScrollingText: builder.mutation({
      query: (id) => ({
        url: `/scrolling-text/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['SCROLLING-TEXT'],
    }),

    // Get all scrolling texts
    getScrollingText: builder.query({
      query: () => ({
        url: '/scrolling-text/get-all',
        method: 'GET',
      }),
      providesTags: ['SCROLLING-TEXT'],
    }),
  }),
});

export const {
  useAddScrollingTextMutation,
  useUpdateScrollingTextMutation,
  useDeleteScrollingTextMutation,
  useGetScrollingTextQuery,
} = scrollingTextApi;
