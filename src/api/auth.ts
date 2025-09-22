import { apiGet } from '@/lib/apiClient';

export const getUser = async () => {
  return await apiGet(`/user/me`);
};
