'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, ITeamJoinRequest } from '@/types';

const createJoinMembers = async (payload: Record<string, string>) => {
  const res = await serverFetch.post<ApiResponse<ITeamJoinRequest>>(
    '/join-team/create',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );

  revalidate('join-team');
  return res;
};

const getJoinMembers = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<ITeamJoinRequest[]>>('/join-team', {
    query,
    cache: 'force-cache',
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
  revalidate('join-team');
  return res;
};

export {
  createJoinMembers,
  deleteSingleJoinMember,
  getJoinMembers,
  getSingleJoinMember,
};
