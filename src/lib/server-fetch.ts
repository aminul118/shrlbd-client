import buildUrl from '@/lib/buildUrl';
import { getCookie } from '@/lib/jwt';

type FetchOptions = RequestInit & {
  query?: Record<string, string>;
};

const serverFetchHelper = async <T>(
  endpoint: string,
  options: FetchOptions,
): Promise<T> => {
  const { headers, query, ...rest } = options;
  const url = buildUrl(endpoint, query);
  const accessToken = await getCookie('accessToken');

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...headers,
      Cookie: accessToken ? `accessToken=${accessToken}` : '',
    },
    ...rest,
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json() as Promise<T>;
};

const serverFetch = {
  get: <T>(endpoint: string, options: FetchOptions = {}) =>
    serverFetchHelper<T>(endpoint, { ...options, method: 'GET' }),

  post: <T>(endpoint: string, options: FetchOptions = {}) =>
    serverFetchHelper<T>(endpoint, { ...options, method: 'POST' }),

  put: <T>(endpoint: string, options: FetchOptions = {}) =>
    serverFetchHelper<T>(endpoint, { ...options, method: 'PUT' }),

  patch: <T>(endpoint: string, options: FetchOptions = {}) =>
    serverFetchHelper<T>(endpoint, { ...options, method: 'PATCH' }),

  delete: <T>(endpoint: string, options: FetchOptions = {}) =>
    serverFetchHelper<T>(endpoint, { ...options, method: 'DELETE' }),
};

export default serverFetch;
