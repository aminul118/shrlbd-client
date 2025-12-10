import { baseApi } from '@/redux/baseApi';
import { ApiResponse } from '@/types';
import { IAiTraining } from '@/types/api.types';

export const aiApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    aiTrainings: builder.mutation({
      query: (aiInfo) => ({
        url: '/ai/create',
        method: 'POST',
        data: aiInfo,
      }),
      invalidatesTags: ['AI'],
    }),

    getAiTrainings: builder.query<
      ApiResponse<IAiTraining[]>,
      Record<string, string>
    >({
      query: (params) => ({
        url: '/ai/get-all',
        method: 'GET',
        params,
      }),
      providesTags: ['AI'],
    }),

    deleteAiTrainingData: builder.mutation({
      query: (id) => ({
        url: `/ai/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['AI'],
    }),
  }),
});

export const {
  useAiTrainingsMutation,
  useGetAiTrainingsQuery,
  useDeleteAiTrainingDataMutation,
} = aiApi;
