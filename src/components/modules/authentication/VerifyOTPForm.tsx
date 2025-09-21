'use client';

import Logo from '@/components/layouts/Logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { authValidation } from './auth.validation';

const VerifyOTPForm = () => {
  const [counter, setCounter] = useState(60); // 1 min timer

  const form = useForm<z.infer<typeof authValidation.otpValidation>>({
    resolver: zodResolver(authValidation.otpValidation),
    defaultValues: {
      otp: '',
    },
  });

  // Countdown effect
  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  const onSubmit = (values: z.infer<typeof authValidation.otpValidation>) => {
    console.log('OTP Submitted:', values);
    // 🔑 Call verify OTP API here
  };

  const handleResend = () => {
    console.log('Resend OTP triggered');
    // 🔑 Call resend OTP API here
    setCounter(60); // reset timer
  };

  return (
    <div data-aos="fade-left" className="flex items-center justify-center">
      <Card className="w-full max-w-md rounded-2xl shadow-xl">
        <CardHeader className="flex flex-col items-center space-y-2 pb-2">
          <Logo />
          <CardTitle className="text-center text-xl font-semibold">
            Verify Your Email
          </CardTitle>
          <p className="text-muted-foreground text-center text-sm">
            Enter the 6-digit code we sent to your email
          </p>
        </CardHeader>

        <CardContent className="space-y-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex max-w-sm flex-col items-center justify-center gap-6"
            >
              {/* OTP Field */}
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center gap-2">
                    <FormLabel className="sr-only">OTP</FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        {...field}
                        className="gap-2 text-lg"
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage className="mt-4" />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-64">
                Verify OTP
              </Button>
            </form>
          </Form>

          {/* Resend OTP Section */}
          <div className="text-center text-sm">
            {counter > 0 ? (
              <Button variant="link" disabled className="text-muted-foreground">
                {` Resend available in ${counter}`}
              </Button>
            ) : (
              <Button variant="link" onClick={handleResend}>
                Resend OTP
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyOTPForm;
