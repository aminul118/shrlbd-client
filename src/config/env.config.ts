const nodeEnv = process.env.NODE_ENV as string;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
const googleAnalytics = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string;
const accessSecret = process.env.JWT_ACCESS_SECRET as string;
const refreshSecret = process.env.JWT_REFRESH_SECRET as string;
const accessTokenMaxAge = parseInt(process.env.JWT_ACCESS_EXPIRES as string);
const refreshTokenMaxAge = parseInt(process.env.JWT_REFRESH_EXPIRES as string);
const domain = process.env.NEXT_PUBLIC_COOKIE_DOMAIN as string;
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY as string;
const cloudFareTurnstileSiteKey = process.env
  .NEXT_PUBLIC_TURNSTILE_SITE_KEY as string;
const cloudFareTurnstileSecretKey = process.env.TURNSTILE_SECRET_KEY as string;

const envVars = {
  nodeEnv,
  baseUrl,
  domain,
  jwt: {
    accessSecret,
    refreshSecret,
    accessTokenMaxAge,
    refreshTokenMaxAge,
  },
  recaptcha: {
    RECAPTCHA_SITE_KEY,
    RECAPTCHA_SECRET_KEY,
  },
  cloudFareTurnstile: {
    cloudFareTurnstileSiteKey,
    cloudFareTurnstileSecretKey,
  },
  analytics: {
    googleAnalytics,
  },
};

export default envVars;
