import z from 'zod';

export const teamJoinValidation = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(4, { message: 'Phone must be at least 4 digits.' }),
  gender: z.string().min(1, { message: 'Please select a gender.' }),
  occupation: z
    .string()
    .min(2, { message: 'Occupation must be at least 2 characters.' }),
  organization: z
    .string()
    .min(2, { message: 'Organization must be at least 2 characters.' }),
  field_of_interest: z
    .string()
    .min(2, { message: 'Field of interest must be at least 2 characters.' }),
  Why_join_team: z
    .string()
    .min(10, { message: 'Please write at least 10 characters.' }),
  time_commitment: z
    .string()
    .min(1, { message: 'Please select a time commitment.' }),
});
