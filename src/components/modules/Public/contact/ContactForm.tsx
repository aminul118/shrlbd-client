/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import SubmitButton from '@/components/common/button/submit-button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import envVars from '@/config/env.config';
import useActionHandler from '@/hooks/useActionHandler';
import { contactAction } from '@/services/contact/contact';
import { contactSchemaZodValidation } from '@/zod/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import { Turnstile } from '@marsidev/react-turnstile';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof contactSchemaZodValidation>;

const ContactForm = () => {
  const { executePost } = useActionHandler();

  const form = useForm<FormValues>({
    resolver: zodResolver(contactSchemaZodValidation),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState('');
  const turnstileRef = useRef<any>(null);

  const onSubmit = async (data: FormValues) => {
    // 🔒 block submit if captcha not solved
    if (!captchaToken) {
      setCaptchaError('Please verify you are human');
      return;
    }

    setCaptchaError('');

    await executePost({
      action: () =>
        contactAction({
          ...data,
          token: captchaToken,
        }),
      success: {
        onSuccess: () => {
          form.reset();
          setCaptchaToken(null);
          turnstileRef.current?.reset();
        },
        message: 'Message send to authority successfully',
        loadingText: 'Message sending to authority..',
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormDescription className="sr-only">
                Your full name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@company.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Subject */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Joining Your Team" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="h-36"
                  placeholder="Write your message here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/*  Turnstile captcha */}
        <div className="space-y-2">
          <Turnstile
            ref={turnstileRef}
            siteKey={envVars.cloudFareTurnstile.cloudFareTurnstileSiteKey}
            onSuccess={(token) => setCaptchaToken(token)}
            onExpire={() => setCaptchaToken(null)}
          />

          {captchaError && (
            <p className="text-sm text-red-500">{captchaError}</p>
          )}
        </div>

        <SubmitButton
          loading={form.formState.isSubmitting}
          text="Send Message"
        />
      </form>
    </Form>
  );
};

export default ContactForm;
