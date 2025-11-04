const nodeEnv = process.env.NODE_ENV;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const googleAnalytics = process.env.GoogleAnalytics;

const envVars = {
  nodeEnv,
  baseUrl,
  googleAnalytics,
};

export default envVars;
