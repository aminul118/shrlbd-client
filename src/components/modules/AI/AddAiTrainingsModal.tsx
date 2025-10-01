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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAiTrainingsMutation } from '@/redux/features/ai/ai.api';
import { aiValidation } from '@/validations/ai';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const AddAiTrainingsModal = () => {
  const [aiTraining] = useAiTrainingsMutation();
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof aiValidation>>({
    resolver: zodResolver(aiValidation),
    defaultValues: {
      question: '',
      answer: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof aiValidation>) => {
    try {
      const toastId = toast.loading('Adding scrolling text...');
      const res = await aiTraining(values).unwrap();
      toast.success(res.message || 'Scrolling text added', { id: toastId });
      form.reset();
      setOpen(false);
    } catch (error: any) {
      toast.error(error.message || 'Failed to add scrolling text');
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button>
          <Plus /> Add AI Training data
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="sm:max-w-[500px] lg:max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>Add AI Trainings data</AlertDialogTitle>
          <AlertDialogDescription>
            This text will use as a ai search on SHRL website
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Write your question..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Write your answer..."
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
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </AlertDialogCancel>
              <Button type="submit" disabled={!form.formState.isValid}>
                Submit
              </Button>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddAiTrainingsModal;
