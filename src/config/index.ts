const config = {
  emailJs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  },
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
};

export default config;
