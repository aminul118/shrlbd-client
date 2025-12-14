'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, ITeamJoinRequest } from '@/types';
import { revalidateTag } from 'next/cache';

const getJoinMembers = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<ITeamJoinRequest[]>>('/join-team', {
    query,
    next: {
      tags: ['join-team'],
    },
  });
};

const getSingleJoinMember = async (slug: string) => {
  const res = await serverFetch.get<ApiResponse<ITeamJoinRequest>>(
    `/join-team/${slug}`,
  );
  return res;
};

const deleteSingleJoinMember = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<ITeamJoinRequest>>(
    `/join-team/${slug}`,
  );
  revalidateTag('join-team', { expire: 0 });
  return res;
};

export { deleteSingleJoinMember, getJoinMembers, getSingleJoinMember };
