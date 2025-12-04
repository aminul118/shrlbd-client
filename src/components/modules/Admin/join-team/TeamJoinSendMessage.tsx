'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import ButtonSpinner from '@/components/common/loader/ButtonSpinner';
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
import { useSendParticipantEmailMutation } from '@/redux/features/joinTeam/joinTeam.api';
import { IModal } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  subject: z
    .string()
    .trim()
    .min(10, { message: 'Subject must be at least 10 characters.' }),
  message: z
    .string()
    .trim()
    .min(20, { message: 'Message must be at least 20 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

interface Props extends IModal {
  email: string;
}

const TeamJoinSendMessage = ({ email, open, setOpen }: Props) => {
  const [sendEmail, { isLoading }] = useSendParticipantEmailMutation();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { subject: '', message: '' },
    mode: 'onSubmit',
  });

  const onSubmit = async (values: FormValues) => {
    if (!email) {
      toast.error('No recipient email found.');
      return;
    }

    const payload = {
      subject: values.subject.trim(),
      message: values.message.trim(),
      email,
    };

    const toastId = toast.loading('Sending message…');

    try {
      const res = await sendEmail(payload).unwrap();
      toast.success(res?.message || 'Message sent', { id: toastId });
      setOpen(false);
      form.reset();
    } catch (err: any) {
      const serverMsg =
        err?.data?.message ||
        err?.error ||
        'Sending failed. Please check your connection and try again.';
      toast.error(serverMsg, { id: toastId });
      // Surface an error inline under the message box
      form.setError('message', { message: serverMsg });
    }
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
              <Button
                type="submit"
                disabled={!form.formState.isValid || isLoading}
              >
                {isLoading ? (
                  <ButtonSpinner />
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send
                  </>
                )}
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TeamJoinSendMessage;
