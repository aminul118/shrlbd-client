'use client';
import ReactQuil from '@/components/common/rich-text/ReactQuil';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import GradientTitle from '@/components/ui/gradientTitle';
import { Input } from '@/components/ui/input';
import MultipleImageDrop from '@/components/ui/multiple-image-drop';

import { useAddEventMutation } from '@/redux/features/event/event.api';
import { previousEventValidation } from '@/validations/event';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

const AddPreviousEvent = () => {
  const [addEvent] = useAddEventMutation();
  type FormValues = z.infer<typeof previousEventValidation>;
  const form = useForm<FormValues>({
    resolver: zodResolver(previousEventValidation),
    defaultValues: {
      title: '',
      content: '',
      photos: [],
    },
  });

  const onSubmit = async (data: FormValues) => {
    const toastId = toast.loading('Event adding....');
    try {
      const payload = {
        title: data.title,
        content: data.content,
      };

      const formData = new FormData();
      formData.append('data', JSON.stringify(payload));

      // Append each file individually
      data.photos.forEach((file) => {
        formData.append('files', file); // 'files' must match backend key
      });

      const res = await addEvent(formData).unwrap();
      toast.success(res.message, { id: toastId });
      form.reset();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message || 'ERROR', { id: toastId });
    }
  };

  return (
    <Container>
      <div className="mb-4 flex items-center justify-between">
        <GradientTitle title="Add Events" />
        <Button asChild>
          <Link href={'/admin/previous-events'}>Show All Events</Link>
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="write title here ....." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Photos */}
          <FormField
            control={form.control}
            name="photos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Photos</FormLabel>
                <FormControl>
                  <MultipleImageDrop onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Quill Editor */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <ReactQuil
                    height={500}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={!form.formState.isValid}>
            Submit
          </Button>
        </form>
      </Form>
    </Container>
  );
};

export default AddPreviousEvent;
