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
  AlertDialogTrigger,
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import useToast from '@/hooks/useToast';
import { useGetAllJobTypesQuery } from '@/redux/features/jobs/job.api';
import { createJob } from '@/services/career/jobs';
import { jobPostValidation } from '@/zod/job-post';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type FormValue = z.infer<typeof jobPostValidation>;

const AddJobModal = () => {
  const [open, setOpen] = useState(false);
  const { handleSuccess } = useToast();

  const { data } = useGetAllJobTypesQuery({});
  const jobTypes = data?.data || [];

  const form = useForm<FormValue>({
    resolver: zodResolver(jobPostValidation),
    defaultValues: {
      title: '',
      department: '',
      location: '',
      jobTypeId: '',
      short_description: '',
      details: '',
    },
  });

  const onSubmit = async (values: FormValue) => {
    try {
      const res = await createJob(values);
      await handleSuccess({
        res,
        message: 'Job created successfully',
        onSuccess: () => form.reset(),
        modalClose: () => setOpen(false),
      });
    } catch (error: any) {
      toast.error(error?.message || 'Failed to create job.');
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add Job</Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="w-full min-w-3xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Post a New Job</AlertDialogTitle>
          <AlertDialogDescription>
            Please fill out the details below to post a new job.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 space-y-8"
          >
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Frontend Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Department */}
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Department</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ex: Engineering, Marketing..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Location */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Dhaka, Remote..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Job Type */}
            <FormField
              control={form.control}
              name="jobTypeId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {jobTypes.map((job) => (
                          <SelectItem key={job._id} value={job._id as string}>
                            {job.jobType}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Short Description */}
            <FormField
              control={form.control}
              name="short_description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-36"
                      placeholder="Brief overview of the job..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Job Details */}
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Details</FormLabel>
                  <FormControl>
                    <ReactQuil
                      value={field.value}
                      onChange={field.onChange}
                      height={300}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpen(false)}>
                Cancel
              </AlertDialogCancel>
              <SubmitButton
                text=" Post Job"
                loading={form.formState.isSubmitting}
              />
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddJobModal;
