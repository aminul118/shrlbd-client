import z from 'zod';

export const previousEventValidation = z.object({
  title: z.string().min(8, {
    message: 'Title must be at least 8 characters.',
  }),
  content: z.string(),
  photos: z
    .array(z.instanceof(File), {
      message: 'At least one photo is required',
    })
    .min(1, 'At least one photo is required'),
});
