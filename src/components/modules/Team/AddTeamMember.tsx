/* eslint-disable @typescript-eslint/no-explicit-any */
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
import ImageDrop from '@/components/ui/image-drop';
import { Input } from '@/components/ui/input';
import { useAddTeamMemberMutation } from '@/redux/features/team/team.api';
import { addTeamMemberValidation } from '@/validations/team';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { FieldArrayPath, useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

const AddTeamMember = () => {
  type FormValues = z.infer<typeof addTeamMemberValidation>;
  const router = useRouter();
  const [addTeamMember] = useAddTeamMemberMutation();

  const form = useForm<FormValues>({
    resolver: zodResolver(addTeamMemberValidation),
    defaultValues: {
      name: '',
      content: '',
      shrlDesignation: '',
      designation: [''],
      email: '',
      phone: '',
      photo: null,
    },
  });
  const { fields, append, remove } = useFieldArray<FormValues>({
    control: form.control,
    name: 'designation' as FieldArrayPath<FormValues>,
  });

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();

    // Exclude the raw File from the JSON blob
    const { photo, ...rest } = data;
    formData.append('data', JSON.stringify(rest));

    if (photo instanceof File) {
      formData.append('file', photo);
    }

    const toastId = toast.loading('Adding team member…');
    try {
      const res = await addTeamMember(formData).unwrap();
      toast.success(res?.message || 'Team member added', { id: toastId });
      form.reset({
        name: '',
        content: '',
        shrlDesignation: '',
        designation: [''],
        email: '',
        phone: '',
        photo: null,
      });

      router.push('/admin/team-members');
    } catch (error: any) {
      toast.error(error?.message || 'Failed to add team member', {
        id: toastId,
      });
    }
  };
  return (
    <Container>
      <div className="mb-4 flex items-center justify-between">
        <GradientTitle title="Add Team Member" />
        <Button asChild>
          <Link href={'/admin/team-members'}>Show All Team Members</Link>
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* 🔹 Name / Email / Phone */}
          <div className="grid gap-3 lg:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+8801*********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* 🔹 SHRL Designation */}
            <FormField
              control={form.control}
              name="shrlDesignation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SHRL Designation</FormLabel>
                  <FormControl>
                    <Input placeholder="Designation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* 🔹 Designation Fields */}
          <div>
            <FormLabel>Designation</FormLabel>
            <div className="space-y-2">
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2">
                  <FormField
                    control={form.control}
                    name={`designation.${index}`}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input
                            placeholder={`Designation ${index + 1}`}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {fields.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => remove(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              className="mt-2"
              onClick={() => append('')}
            >
              <Plus className="mr-2 h-4 w-4" /> Add Designation
            </Button>
          </div>

          {/* 🔹 Photo Upload */}
          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Photo</FormLabel>
                <FormControl>
                  {/* Pass the onChange handler AS A PROP */}
                  <ImageDrop onChange={(file) => field.onChange(file)} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 🔹 Content/Bio */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Suspense fallback={<div>Loading editor…</div>}>
                    <ReactQuil value={field.value} onChange={field.onChange} />
                  </Suspense>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={!form.formState.isValid} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </Container>
  );
};

export default AddTeamMember;
