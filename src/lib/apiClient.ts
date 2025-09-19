import envVars from '@/config/env.config';
import { IApiParams, IFetchOptions } from '@/types';

export const apiGet = async <T>(
  endpoint: string,
  params: IApiParams = {},
  fetchOptions: IFetchOptions = {},
): Promise<T> => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      query.append(key, String(value));
    }
  });

  const url = `${envVars.baseUrl}${endpoint}${
    query.toString() ? `?${query.toString()}` : ''
  }`;

  const res = await fetch(url, {
    ...fetchOptions,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
  }

  return res.json() as Promise<T>;
};
