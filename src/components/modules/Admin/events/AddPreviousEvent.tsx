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
import useActionHandler from '@/hooks/useActionHandler';
import { createEvent } from '@/services/event/event';
import { previousEventValidation } from '@/zod/event';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import z from 'zod';

const AddPreviousEvent = () => {
  const { executePost } = useActionHandler();
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
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));

    // Append each file individually
    data.photos.forEach((file) => {
      formData.append('files', file); // 'files' must match backend key
    });

    await executePost({
      action: () => createEvent(formData),
      success: {
        onSuccess: () => form.reset(),
        loadingText: 'Event details adding...',
        message: 'Event added successfully.',
        redirectPath: '/admin/previous-events',
      },
    });
  };

  return (
    <Container>
      <div className="mb-4 flex items-center justify-between">
        <GradientTitle title="Create New Event" />
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
