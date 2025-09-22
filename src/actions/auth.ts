'use server';

import validation from '@/validations';

const RegistrationSchema = validation.auth.registrationFormValidation;

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

  const parsed = RegistrationSchema.safeParse(payload);
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
