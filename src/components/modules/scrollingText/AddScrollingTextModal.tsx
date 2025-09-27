'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createScrollingText } from '@/actions/scrolling-text';
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
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  text: z.string().min(10, {
    message: 'Scrolling text must be at least 10 characters.',
  }),
});

const AddScrollingTextModal = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const toastId = toast.loading('Adding scrolling text...');
      const res = await createScrollingText(values);
      toast.success(res.message || 'Scrolling text added', { id: toastId });
      form.reset();
      setOpen(false); // ✅ close modal shadcn way
    } catch (error: any) {
      toast.error(error.message || 'Failed to add scrolling text');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus /> Add Scrolling Text
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] lg:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add Scrolling Text</DialogTitle>
          <DialogDescription>
            This text will show at the top of the event page.
          </DialogDescription>
        </DialogHeader>

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

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button disabled={!form.formState.isValid} type="submit">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddScrollingTextModal;
