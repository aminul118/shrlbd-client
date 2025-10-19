const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required .env variable: ${key}`);
  }
  return value;
};

export default getEnv;
