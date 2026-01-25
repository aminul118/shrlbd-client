'use client';

import SubmitButton from '@/components/common/button/submit-button';
import Container from '@/components/ui/Container';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import GrediantHeading from '@/components/ui/GrediantHeading';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import useActionHandler from '@/hooks/useActionHandler';
import { createJoinMembers } from '@/services/team/team-join';
import { teamJoinValidation } from '@/zod/team';
import { zodResolver } from '@hookform/resolvers/zod';
import { Turnstile } from '@marsidev/react-turnstile';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof teamJoinValidation>;

const JoinTeamForm = () => {
  const { executePost } = useActionHandler();
  // ✅ captcha states
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState('');
  const turnstileRef = useRef<any>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(teamJoinValidation),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      gender: '',
      occupation: '',
      organization: '',
      field_of_interest: '',
      Why_join_team: '',
      time_commitment: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (payload: FormValues) => {
    //  block bots
    if (!captchaToken) {
      setCaptchaError('Please verify you are human');
      return;
    }

    setCaptchaError('');

    await executePost({
      action: () =>
        createJoinMembers({
          ...payload,
          token: captchaToken,
        }),
      success: {
        onSuccess: () => {
          form.reset();
          setCaptchaToken(null);
          turnstileRef.current?.reset();
        },
        loadingText: 'Application submitting..',
        message: 'Application submitted successfully',
      },
    });
  };

  return (
    <Container data-aos="fade-left" id="apply">
      <GrediantHeading heading="Join the SHRL Team" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
          noValidate
        >
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 2: Phone + Gender */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+8801XXXXXXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    value={field.value || undefined}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">
                        Other / Prefer not to say
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 3: Occupation + Organization */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Occupation</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Software Engineer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization</FormLabel>
                  <FormControl>
                    <Input placeholder="Company / Institution" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 4: Field of Interest + Time Commitment */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="field_of_interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field of Interest</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., AI in healthcare, Frontend, Research"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time_commitment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time Commitment</FormLabel>
                  <Select
                    value={field.value || undefined}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="2-4">2–4 hrs/week</SelectItem>
                      <SelectItem value="5-8">5–8 hrs/week</SelectItem>
                      <SelectItem value="9-12">9–12 hrs/week</SelectItem>
                      <SelectItem value="12+">12+ hrs/week</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Full-width: Why join the team? */}
          <FormField
            control={form.control}
            name="Why_join_team"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Why do you want to join the team?</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-40"
                    placeholder="Tell us about your motivation, goals, and how you can contribute…"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ✅ CAPTCHA */}
          <div className="space-y-2">
            <Turnstile
              ref={turnstileRef}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={(token) => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken(null)}
            />

            {captchaError && (
              <p className="text-sm text-red-500">{captchaError}</p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <SubmitButton
              loading={form.formState.isSubmitting}
              text="Send Join Request"
            />
          </div>
        </form>
      </Form>
    </Container>
  );
};

export default JoinTeamForm;
