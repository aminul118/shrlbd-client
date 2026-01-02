'use client';

import SubmitButton from '@/components/common/button/submit-button';
import { ButtonGroup } from '@/components/ui/button-group';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { NewsletterInput, newsletterSchema } from '@/validations/newsletter';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function NewsLetter() {
  const form = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: NewsletterInput) => {
    console.log('Newsletter Data:', data);
  };

  return (
    <section className="mx-auto mt-12 flex w-full max-w-4xl justify-center rounded-t-2xl bg-linear-to-r from-gray-800 via-blue-700 to-gray-900 py-20 text-white">
      <div className="w-full max-w-md space-y-4 text-center">
        {/* Heading */}
        <div>
          <h3 className="text-lg font-semibold">Stay in the loop</h3>
          <p className="text-sm text-white/90">
            Get product updates, feature releases, and useful insights.
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ButtonGroup className="w-full">
              <ButtonGroup className="flex w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter your email"
                          className="rounded-r-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <SubmitButton text="Subscribe" />
              </ButtonGroup>
            </ButtonGroup>
          </form>
        </Form>

        {/* Trust text */}
        <p className="text-xs">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
