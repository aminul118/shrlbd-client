'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAddJobTypeMutation } from '@/redux/features/jobs/job.api';
import { toast } from 'sonner';

const formSchema = z.object({
  jobType: z.string().min(2, {
    message: 'jobType must be at least 2 characters.',
  }),
});

type FormValue = z.infer<typeof formSchema>;

const AddJobTypeModal = () => {
  const [addJob] = useAddJobTypeMutation();

  const form = useForm<FormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobType: '',
    },
  });

  const onSubmit = async (value: FormValue) => {
    try {
      const res = await addJob(value).unwrap();
      if (res.status === 201) {
        toast.success(res.message || 'Job Type created');
        return;
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to create job type');
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add Job Type</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-full min-w-lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Add Job Type</AlertDialogTitle>
          <AlertDialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-6 space-y-8"
              >
                <FormField
                  control={form.control}
                  name="jobType"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Job Type Ex. ( Part Time )"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction type="submit">
                    Add Job Type
                  </AlertDialogAction>
                </AlertDialogFooter>
              </form>
            </Form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddJobTypeModal;
