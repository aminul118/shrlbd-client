const getEnv = (key: string): string | undefined => {
  const value = process.env[key];
  return value;
};

const envVars = {
  baseUrl: getEnv('NEXT_PUBLIC_BASE_URL'),
};

export default envVars;
