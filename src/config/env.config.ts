import getEnv from '@/helpers/getEnv';

const envVars = {
  baseUrl: getEnv('NEXT_PUBLIC_BASE_URL'),
  googleAnalytics: getEnv('GoogleAnalytics'),
};

export default envVars;
