'use server';

import serverFetch from '@/lib/server-fetch';
import { ApiResponse, IUser } from '@/types';

const getUsers = async (query: Record<string, string>) => {
  return await serverFetch.get<ApiResponse<IUser[]>>('/user/all-users', {
    query,
    cache: 'force-cache',
    next: {
      tags: ['users'],
    },
  });
};

export { getUsers };
