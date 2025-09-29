'use server';

import envVars from '@/config/env.config';
import { registrationFormValidation } from '@/validations/auth';

export async function registerUser(formData: FormData) {
  // Convert FormData -> object
  const payload = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  };

  const parsed = registrationFormValidation.safeParse(payload);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    // Return errors so the client can render them
    return { ok: false, errors: fieldErrors };
  }

  // TODO: create user, hash password, etc.
  // await createUser(parsed.data);

  // You can also redirect here if success:
  // redirect('/login');

  return { ok: true };
}

interface IPayload {
  plainPassword: string;
  token: string;
}

export async function setPasswordAction(payload: IPayload) {
  const { plainPassword, token } = payload;

  try {
    const res = await fetch(`${envVars.baseUrl}/auth/set-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(plainPassword),
      cache: 'no-store',
    });

    return await res.json();
  } catch (err) {
    console.error('setPasswordAction error:', err);
    throw err;
  }
}
