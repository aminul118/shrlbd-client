import { apiGet } from '@/lib/apiClient';
import { ApiResponse, ITeamMember } from '@/types';
import { ITeamJoinRequest } from '@/types/apiData.types';

export const getSingleTeamMember = async (
  slug: string,
  params?: Record<string, string>,
) => {
  return await apiGet<ApiResponse<ITeamMember>>(`/team/${slug}`, params);
};

export const getAllTeamJoinRequest = async (
  params?: Record<string, string>,
) => {
  return await apiGet<ApiResponse<ITeamJoinRequest[]>>(`/join-team`, params);
};
