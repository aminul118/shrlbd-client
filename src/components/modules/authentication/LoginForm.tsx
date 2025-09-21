'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import Logo from '@/components/layouts/Logo';
import Password from '@/components/ui/password';
import images from '@/config/images';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { authValidation } from './auth.validation';

const LoginForm = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const form = useForm<z.infer<typeof authValidation.loginFormValidation>>({
    resolver: zodResolver(authValidation.loginFormValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (
    values: z.infer<typeof authValidation.loginFormValidation>,
  ) => {
    console.log(values);
  };

  return (
    <div
      className={cn('flex items-center justify-center', className)}
      {...props}
      data-aos="fade-left"
    >
      <Card className="w-full max-w-5xl overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          {/* Form Section */}
          <div className="flex flex-col justify-center gap-6 p-6 md:p-12">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                <div className="grid place-items-center">
                  <Logo />
                  <p className="text-muted-foreground mt-4">
                    Login to your Tab Startup portal
                  </p>
                </div>

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel>Password</FormLabel>
                        <Link
                          href="/forgot-password"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <FormControl>
                        <Password
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>

              <div className="mt-4 text-center text-sm">
                {"Don't have an account?"}
                <Link href="/register">
                  <Button variant="link" className="p-0 pl-1">
                    Sign up
                  </Button>
                </Link>
              </div>
            </Form>
          </div>

          {/* Image Section */}
          <div className="relative hidden h-full w-full md:block">
            <Image
              src={images.auth}
              height={400}
              width={400}
              alt=""
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
