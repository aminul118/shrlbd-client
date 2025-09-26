import { apiGet } from '@/lib/apiClient';
import { ApiResponse, ITeamMember } from '@/types';

export const getSingleTeamMember = async (
  slug: string,
  params?: Record<string, string>,
) => {
  return await apiGet<ApiResponse<ITeamMember>>(`/team/${slug}`, params);
};
