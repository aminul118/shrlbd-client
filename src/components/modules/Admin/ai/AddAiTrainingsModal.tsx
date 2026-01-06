import SubmitButton from '@/components/common/button/submit-button';
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
import useActionHandler from '@/hooks/useActionHandler';
import { createAi } from '@/services/ai/ai';
import { aiValidation } from '@/zod/ai';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof aiValidation>;

const AddAiTrainingsModal = () => {
  const { executePost } = useActionHandler();
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(aiValidation),
    defaultValues: {
      question: '',
      answer: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    executePost({
      action: () => createAi(values),
      success: {
        onSuccess: () => {
          setOpen(false);
          form.reset();
        },
        loadingText: 'AI training data creating...',
        message: 'AI training data created',
      },
      errorMessage: 'Something went wrong..',
    });
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

              <SubmitButton loading={form.formState.isSubmitting} />
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddAiTrainingsModal;
