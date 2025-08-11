/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
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
import { toast } from 'sonner';
import axios from 'axios';
import config from '@/config';

const formSchema = z.object({
  name: z.string().min(2, 'Name is too short').max(50, 'Name is too long'),
  email: z.string().email('Enter a valid email'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    const toastId = toast.loading('Message Sending');
    try {
      const res = await axios.post(`${config.baseUrl}/contact/create`, data, {
        withCredentials: true,
      });
      console.log(res);
      toast.success('Message sent', { id: toastId });
      form.reset();
    } catch (error: any) {
      toast.error('Message not sent!');
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Top row: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" autoComplete="name" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">Your full name</FormDescription>
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
                      placeholder="john@company.com"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">Your email address</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Subject (full width) */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Joining Your Team" {...field} />
                </FormControl>
                <FormDescription className="sr-only">The topic of your message</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message (full width) */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea className="h-36" placeholder="Write your message here..." {...field} />
                </FormControl>
                <FormDescription className="sr-only">Your full message</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-2">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
