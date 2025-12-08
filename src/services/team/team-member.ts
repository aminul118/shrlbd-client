'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, ITeamMember } from '@/types';

const getTeamMembers = async (query: Record<string, any>) => {
  return await serverFetch.get<ApiResponse<ITeamMember[]>>('/team/get-all', {
    query,
    next: {
      tags: ['team-members'],
    },
  });
};

const getSingleTeamMember = async (slug: string) => {
  return await serverFetch.get<ApiResponse<ITeamMember>>(`/team/${slug}`);
};

const deleteSingleTeamMember = async (slug: string) => {
  return await serverFetch.delete<ApiResponse<ITeamMember>>(`/team/${slug}`);
};

export { deleteSingleTeamMember, getSingleTeamMember, getTeamMembers };
