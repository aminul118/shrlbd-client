'use client';

import SubmitButton from '@/components/common/button/submit-button';
import ReactQuil from '@/components/common/rich-text/ReactQuil';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
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
import useActionHandler from '@/hooks/useActionHandler';
import { sendMessageToMember } from '@/services/team/team-join';
import { IModal } from '@/types';
import { TeamJoinSendMessageValidationSchema } from '@/zod/team';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof TeamJoinSendMessageValidationSchema>;

interface Props extends IModal {
  email: string;
}

const TeamJoinSendMessage = ({ email, open, setOpen }: Props) => {
  const { executePost } = useActionHandler();

  const form = useForm<FormValues>({
    resolver: zodResolver(TeamJoinSendMessageValidationSchema),
    defaultValues: { subject: '', message: '' },
    mode: 'onSubmit',
  });

  const onSubmit = async (data: FormValues) => {
    const payload = {
      ...data,
      email,
    };
    await executePost({
      action: () => sendMessageToMember(payload),
      success: {
        onSuccess: () => {
          form.reset();
          setOpen(false);
        },
        loadingText: 'Message sending...',
        message: 'Message send successfully.',
      },
      errorMessage: 'Error to send message to participant',
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="sm:max-w-3xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Send a Message</AlertDialogTitle>
          <AlertDialogDescription>
            Write your subject and message, then click send.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Subject */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter subject"
                      autoComplete="off"
                      {...field}
                      autoFocus
                      aria-invalid={!!form.formState.errors.subject}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message*/}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <ReactQuil
                      height={300}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <AlertDialogFooter className="flex justify-end space-x-2">
              <AlertDialogCancel asChild>
                <Button type="button" variant="destructive">
                  <X /> Cancel
                </Button>
              </AlertDialogCancel>
              <SubmitButton loading={form.formState.isSubmitting} text="Send" />
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TeamJoinSendMessage;
