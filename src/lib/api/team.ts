import { ApiResponse, ITeamMember } from '@/types';
import { apiGet, IApiParams } from '../apiClient';

export const getTeamMembers = async (params?: IApiParams) => {
  return await apiGet<ApiResponse<ITeamMember[]>>('/team/get-all', params, {
    cache: 'force-cache',
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
