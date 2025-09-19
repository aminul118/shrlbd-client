import { ApiResponse, ITeamMember } from '@/types';
import { apiGet } from '../apiClient';

export const getTeamMembers = async (params?: Record<string, string>) => {
  return await apiGet<ApiResponse<ITeamMember[]>>(`/team/get-all`, params);
};

export const getSingleTeamMember = async (
  slug: string,
  params?: Record<string, string>,
) => {
  return await apiGet<ApiResponse<ITeamMember>>(`/team/${slug}`, params);
};
