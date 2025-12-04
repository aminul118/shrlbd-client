'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import ButtonSpinner from '@/components/common/loader/ButtonSpinner';
import ReactQuil from '@/components/common/rich-text/ReactQuil';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import DatePicker from '@/components/ui/date-picker';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import GradientTitle from '@/components/ui/gradientTitle';
import ImageDrop from '@/components/ui/image-drop';
import { Input } from '@/components/ui/input';
import { useAddUpcomingEventMutation } from '@/redux/features/upcoming-event/upcomingEvent.api';
import { upcomingEventValidation } from '@/zod/upcoming-event';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type FormValues = z.infer<typeof upcomingEventValidation>;

const AddUpcomingEvent = () => {
  const router = useRouter();
  const [addUpcomingEvent, { isLoading }] = useAddUpcomingEventMutation();

  const form = useForm<FormValues>({
    resolver: zodResolver(upcomingEventValidation),
    defaultValues: {
      title: '',
      date: new Date(),
      time: '',
      venue: '',
      details: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));
    formData.append('file', data.photo);

    try {
      const res = await addUpcomingEvent(formData).unwrap();
      toast.success(res.message || 'Event added successfully!');
      form.reset();
      router.push('/admin/upcoming-events');
    } catch (error: any) {
      toast.error(error?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Container>
      <div className="flex items-center justify-between">
        <GradientTitle title="Create New Upcoming Event" />
        <Button asChild>
          <Link href="/admin/upcoming-events">Show All Upcoming Events</Link>
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
                  <Input placeholder="Event Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Venue */}
          <FormField
            control={form.control}
            name="venue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Venue</FormLabel>
                <FormControl>
                  <Input placeholder="Venue" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Time & Date */}
          <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <Input placeholder="(e.g. 6:00 to 7:00 PM)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Date</FormLabel>
                  <FormControl>
                    <DatePicker value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Photo */}
          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Photo</FormLabel>
                <FormControl>
                  <ImageDrop onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Details */}
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Details</FormLabel>
                <FormControl>
                  <ReactQuil
                    value={field.value}
                    onChange={field.onChange}
                    height={400}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={!form.formState.isValid}>
            {isLoading ? (
              <>
                <ButtonSpinner /> Add Event
              </>
            ) : (
              'Add Event'
            )}
          </Button>
        </form>
      </Form>
    </Container>
  );
};

export default AddUpcomingEvent;
