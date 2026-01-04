'use client';

import SubmitButton from '@/components/common/button/submit-button';
import ReactQuil from '@/components/common/rich-text/ReactQuil';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import GradientTitle from '@/components/ui/gradientTitle';
import { Input } from '@/components/ui/input';
import SingleImageUploader from '@/components/ui/single-image-uploader';
import useActionHandler from '@/hooks/useActionHandler';
import { createBlog } from '@/services/blogs/blogs';
import { addBlogSchema } from '@/zod/blog';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormValues = z.infer<typeof addBlogSchema>;

const AddBlog = () => {
  const { executePost } = useActionHandler();

  const form = useForm<FormValues>({
    resolver: zodResolver(addBlogSchema),
    defaultValues: {
      title: '',
      slug: '',
      content: '',
    },
  });

  //  Submit handler
  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();

    // Exclude the raw File from the JSON blob
    const { thumbnail, ...rest } = data;
    formData.append('data', JSON.stringify(rest));

    if (thumbnail instanceof File) {
      formData.append('file', thumbnail);
    }

    await executePost({
      action: () => createBlog(formData),
      success: {
        onSuccess: () => form.reset(),
        loadingText: 'Blog adding...',
        message: 'Blog added successfully',
        redirectPath: '/admin/blogs',
      },
    });
  };

  return (
    <Container>
      <div className="mb-4 flex items-center justify-between">
        <GradientTitle title="Add New Blog" />
        <Button asChild>
          <Link href={'/admin/blogs'}>Show Blogs</Link>
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter blog title" {...field} />
                </FormControl>
                <FormDescription>
                  The main heading for your blog post.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Slug */}
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input placeholder="blog-title-slug" {...field} />
                </FormControl>
                <FormDescription>
                  Used in the blog URL (e.g. -blog-your-slug)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 🔹 Photo Upload */}
          <FormField
            control={form.control}
            name="thumbnail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Photo</FormLabel>
                <FormControl>
                  {/* Pass the onChange handler AS A PROP */}
                  <SingleImageUploader
                    onChange={(file) => field.onChange(file)}
                  />
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
                <FormLabel>Blow Writer</FormLabel>
                <FormControl>
                  <Suspense fallback={<div>Loading editor…</div>}>
                    <ReactQuil value={field.value} onChange={field.onChange} />
                  </Suspense>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <SubmitButton loading={form.formState.isSubmitting} text="Add Blog" />
        </form>
      </Form>
    </Container>
  );
};

export default AddBlog;
