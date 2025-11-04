import { baseApi } from '@/redux/baseApi';
import { ApiResponse } from '@/types';
import { IJob, IJobType } from '@/types/apiData.types';

export const jobApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add Job Type
    addJobType: builder.mutation({
      query: (jobType) => ({
        url: '/job/type',
        method: 'POST',
        data: jobType,
      }),
      invalidatesTags: ['JOB-TYPES'],
    }),
    // Add Job Type
    addJob: builder.mutation({
      query: (job) => ({
        url: '/job',
        method: 'POST',
        data: job,
      }),
      invalidatesTags: ['JOBS'],
    }),

    // Get All Jobs
    getAllJobs: builder.query<ApiResponse<IJob[]>, unknown>({
      query: (params) => ({
        url: '/job',
        method: 'GET',
        params,
      }),
      providesTags: ['JOBS'],
    }),

    // Get All Job Types
    getAllJobTypes: builder.query<ApiResponse<IJobType[]>, unknown>({
      query: () => ({
        url: '/job/types',
        method: 'GET',
      }),
      providesTags: ['JOB-TYPES'],
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useGetAllJobTypesQuery,
  useAddJobTypeMutation,
  useAddJobMutation,
} = jobApi;
