'use server';

import catchZodError from '@/helpers/catchZodError';
import { contactSchemaZodValidation } from '@/validations/contact';

export const contactAction = async (_: any, formData: FormData) => {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  const result = catchZodError(contactSchemaZodValidation, rawData);

  if (!result.success) {
    return result;
  }

  return {
    success: true,
    message: 'Message sent successfully!',
  };
};
