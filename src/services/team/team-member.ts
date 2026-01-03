'use server';

import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, ITeamMember } from '@/types';

const createTeamMember = async (formData: FormData) => {
  const body = new FormData();
  body.append('data', formData.get('data') as string);
  body.append('file', formData.get('file') as File);

  const res = await serverFetch.post<ApiResponse<ITeamMember>>('/team/create', {
    body,
  });

  revalidate('team-members');
  return res;
};

const updateTeamMember = async (formData: FormData, slug: string) => {
  const body = new FormData();
  body.append('data', formData.get('data') as string);
  body.append('file', formData.get('file') as File);

  const res = await serverFetch.post<ApiResponse<ITeamMember>>(
    `/team/${slug}`,
    {
      body,
    },
  );

  revalidate('team-members');
  return res;
};

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
  return await serverFetch.get<ApiResponse<ITeamMember>>(`/team/${slug}`);
};

const deleteSingleTeamMember = async (slug: string) => {
  const res = await serverFetch.delete<ApiResponse<ITeamMember>>(
    `/team/${slug}`,
  );
  revalidate('team-members');
  return res;
};

export {
  createTeamMember,
  deleteSingleTeamMember,
  getSingleTeamMember,
  getTeamMembers,
  updateTeamMember,
};
