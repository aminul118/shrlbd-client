'use server';

import serverFetch from '@/lib/server-fetch';

const joinTeamDelete = async (slug: string) => {
  return await serverFetch.delete(`/join-team/${slug}`, {});
};

export { joinTeamDelete };
