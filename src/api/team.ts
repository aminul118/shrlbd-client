import { apiGet, IApiParams } from '@/lib/apiClient';
import { ApiResponse, ITeamMember } from '@/types';

export const getTeamMembers = async (params?: IApiParams) => {
  return await apiGet<ApiResponse<ITeamMember[]>>('/team/get-all', params, {
    next: {
      tags: ['team-members'],
    },
  });
};

export const getSingleTeamMember = async (
  slug: string,
  params?: Record<string, string>,
) => {
  return await apiGet<ApiResponse<ITeamMember>>(`/team/${slug}`, params);
};
