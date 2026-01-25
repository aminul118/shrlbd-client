'use server';

import envVars from '@/config/env.config';
import { revalidate } from '@/lib/revalidate';
import serverFetch from '@/lib/server-fetch';
import { ApiResponse, ITeamJoinRequest } from '@/types';

export interface ISendMessageToMember {
  subject: string;
  message: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

const createJoinMembers = async (payload: Record<string, string>) => {
  const { token, ...formData } = payload;

  /*  STEP 1 — verify captcha FIRST */
  const verifyRes = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${envVars.cloudFareTurnstile.cloudFareTurnstileSecretKey}&response=${token}`,
      cache: 'no-store',
    },
  );

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    throw new Error('Bot detected. Submission blocked.');
  }

  /*  STEP 2 — only humans reach here */
  const res = await serverFetch.post<ApiResponse<ITeamJoinRequest>>(
    '/join-team/create',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    },
  );

  revalidate('join-team');

  return res;
};

const sendMessageToMember = async (payload: Record<string, string>) => {
  const res = await serverFetch.post<ApiResponse<ISendMessageToMember>>(
    '/join-team/admin-message',
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
  sendMessageToMember,
};
