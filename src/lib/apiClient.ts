import envVars from '@/config/env.config';

export interface IApiParams {
  [key: string]: string | number | undefined;
}

export async function apiGet<T>(
  endpoint: string,
  params: IApiParams = {},
): Promise<T> {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      query.append(key, String(value));
    }
  });

  const url = `${envVars.baseUrl}${endpoint}?${query.toString()}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
  }

  return await res.json();
}
