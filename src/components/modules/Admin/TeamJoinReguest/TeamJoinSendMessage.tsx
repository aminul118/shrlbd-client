/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactQuil from '@/components/common/rich-text/ReactQuil';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useEffect, useState } from 'react';
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

export function TeamJoinSendMessage({ email }: { email: string }) {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { subject: '', message: '' },
    mode: 'onSubmit',
  });

  // Reset the form whenever the dialog closes
  useEffect(() => {
    if (!open) form.reset();
  }, [open, form]);

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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          aria-label="Open send message dialog"
        >
          <Send />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Send a Message</DialogTitle>
          <DialogDescription>
            Write your subject and message, then click send.
          </DialogDescription>
        </DialogHeader>

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

            <DialogFooter className="flex justify-end space-x-2">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">
                <Send className="mr-2 h-4 w-4" />
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
