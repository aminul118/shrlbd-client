import { z } from 'zod';

const scrollingTextZodSchema = z.object({
  text: z.string().min(10, {
    message: 'Scrolling text must be at least 10 characters.',
  }),
});

export { scrollingTextZodSchema };
