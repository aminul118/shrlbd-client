import envVars from '@/config/env.config';
export interface IApiParams {
  [key: string]: string | number | undefined;
}

export interface IFetchOptions {
  cache?: RequestCache; // 'force-cache' | 'no-store' | 'reload' | 'only-if-cached'
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

export const apiGet = async <T>(
  endpoint: string,
  params: IApiParams = {},
  fetchOptions: IFetchOptions = {
    cache: 'no-store',
  },
): Promise<T> => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      query.append(key, String(value));
    }
  });

  const convertQuery = query.toString();

  const url = `${envVars.baseUrl}${endpoint}${
    convertQuery ? `?${convertQuery}` : ''
  }`;

  const res = await fetch(url, {
    ...fetchOptions,
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
  }

  return res.json() as Promise<T>;
};
