'use client';

import BackButton from '@/components/common/button/back-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="height-adjust flex items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <div className="w-full max-w-lg space-y-8 rounded-lg border p-6 shadow-2xl backdrop-blur-sm sm:p-10 md:p-14">
        {/* 404 heading */}
        <h1 className="text-[5rem] leading-none font-extrabold text-red-500 sm:text-[7rem] md:text-[9rem]">
          404
        </h1>

        {/* Subheading and message */}
        <div>
          <h2 className="text-primary/70 mb-2 text-2xl font-semibold sm:text-3xl md:text-4xl">
            Oops!
          </h2>
          <p className="text-primary/70 text-sm sm:text-base">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BackButton />

          <Button asChild className="w-full text-sm sm:w-auto sm:text-base">
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
