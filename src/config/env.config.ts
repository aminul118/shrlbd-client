const nodeEnv = process.env.NODE_ENV;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const googleAnalytics = process.env.GoogleAnalytics;
const accessSecret = process.env.JWT_SECRET as string;
const domain = process.env.NEXT_PUBLIC_COOKIE_DOMAIN as string;

const envVars = {
  nodeEnv,
  baseUrl,
  googleAnalytics,
  domain,
  jwt: {
    accessSecret,
  },
};

export default envVars;
