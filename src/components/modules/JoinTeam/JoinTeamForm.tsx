/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import axios from 'axios';
import { toast } from 'sonner';
import GrediantHeading from '@/components/ui/GrediantHeading';

interface JoinTeamResponse {
  statusCode: number;
  success: boolean;
  message: string;
}

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(4, { message: 'Phone must be at least 4 digits.' }),
  gender: z.string().min(1, { message: 'Please select a gender.' }),
  occupation: z.string().min(2, { message: 'Occupation must be at least 2 characters.' }),
  organization: z.string().min(2, { message: 'Organization must be at least 2 characters.' }),
  field_of_interest: z
    .string()
    .min(2, { message: 'Field of interest must be at least 2 characters.' }),
  Why_join_team: z.string().min(10, { message: 'Please write at least 10 characters.' }),
  time_commitment: z.string().min(1, { message: 'Please select a time commitment.' }),
});

type FormValues = z.infer<typeof formSchema>;

const JoinTeamForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
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

  const onSubmit = async (values: FormValues) => {
    const toastId = toast.loading('Application sending…');
    try {
      const res = await axios.post<Partial<JoinTeamResponse>>(
        'https://server.shrlbd.com/api/v1/join-team/create',
        values,
      );

      if (res.data?.success) {
        toast.success(res.data.message || 'Application sent', { id: toastId });
        form.reset();
        return;
      }
      toast.error(res.data?.message || 'Application not sent', { id: toastId });
    } catch (err: any) {
      const msg = err.response?.data?.message || err.message || 'Application not sent';
      toast.error(msg, { id: toastId });
    }
  };

  const submitting = form.formState.isSubmitting;

  return (
    <div>
      <GrediantHeading heading="Join the SHRL Team" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" noValidate>
          {/* Row 1: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 2: Phone + Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <Select value={field.value || undefined} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other / Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 3: Occupation + Organization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="field_of_interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Field of Interest</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., AI in healthcare, Frontend, Research" {...field} />
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
                  <Select value={field.value || undefined} onValueChange={field.onChange}>
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

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Submit'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default JoinTeamForm;
