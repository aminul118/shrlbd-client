import z from 'zod';

export const jobPostValidation = z.object({
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  department: z
    .string()
    .min(2, { message: 'Department must be at least 2 characters.' }),
  location: z
    .string()
    .min(2, { message: 'Location must be at least 2 characters.' }),
  jobTypeId: z.string().min(1, { message: 'Please select a job type.' }),
  short_description: z
    .string()
    .min(5, { message: 'Short description must be at least 5 characters.' }),
  details: z
    .string()
    .min(10, { message: 'Details must be at least 10 characters.' }),
});
