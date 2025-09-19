import { ApiResponse, ITeamMember } from '@/types';
import { apiGet } from '../apiClient';
export interface IApiGetParams {
  params?: Record<string, string | number>;
}

export const getTeamMembers = async ({ params }: IApiGetParams) => {
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
