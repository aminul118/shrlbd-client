'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { handleSuccess } from '@/lib/toast';
import { createScrollingText } from '@/services/scrolling-text/scrolling-text';
import { scrollingTextZodSchema } from '@/zod/scrollingText';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type FormValues = z.infer<typeof scrollingTextZodSchema>;

const AddScrollingTextModal = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(scrollingTextZodSchema),
    defaultValues: {
      text: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await createScrollingText(values);
      await handleSuccess({
        res,
        onSuccess: () => form.reset(),
      });

      setOpen(false);
    } catch (error: any) {
      toast.error(error.message || 'Failed to add scrolling text');
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button>
          <Plus /> Add Scrolling Text
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="sm:max-w-[500px] lg:max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Scrolling Text</AlertDialogTitle>
          <AlertDialogDescription>
            This text will show at the top of the event page.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Write your scrolling text..."
                      {...field}
                      className="h-36"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="destructive" type="button">
                  Cancel
                </Button>
              </AlertDialogCancel>
              <Button disabled={!form.formState.isValid} type="submit">
                Submit
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddScrollingTextModal;
