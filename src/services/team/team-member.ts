'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, ITeamMember } from '@/types';
import { revalidateTag } from 'next/cache';

const getTeamMembers = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<ITeamMember[]>>('/team/get-all', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['team-members'],
    },
  });
};

const getSingleTeamMember = async (slug: string) => {
  const res = await serverFetch.get<ApiResponse<ITeamMember>>(`/team/${slug}`);
  return res;
};

const deleteSingleTeamMember = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<ITeamMember>>(
    `/team/${slug}`,
  );

  revalidateTag('team-members', { expire: 0 });

  return res;
};

export { deleteSingleTeamMember, getSingleTeamMember, getTeamMembers };
