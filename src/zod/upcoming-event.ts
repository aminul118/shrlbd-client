import { z } from 'zod';

export const upcomingEventValidation = z.object({
  title: z.string().min(6, { message: 'Title must be at least 6 characters.' }),
  date: z.date(),
  time: z.string().min(1, { message: 'Time is required' }),
  venue: z.string().min(2, { message: 'Venue must be at least 2 characters.' }),
  photo: z.instanceof(File, { message: 'Must upload an image file' }),
  details: z.string().refine(
    (value) => {
      const plainText = value
        .replace(/<[^>]+>/g, '') // remove HTML
        .replace(/&nbsp;/g, ' ')
        .trim();

      return plainText.length >= 10;
    },
    { message: 'Details must be at least 10 characters.' },
  ),
});
