'use client';

import { Button } from '@/components/ui/button';
import { Frown, Undo } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NotFoundProps {
  title?: string;
  description?: string;
}

const NotFound = ({
  title = 'Item not found',
  description = 'When admin adds some data, you will find it here.',
}: NotFoundProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="height-adjust flex flex-col items-center justify-center px-4 text-center">
      <div className="grid place-items-center p-4">
        <Frown className="text-muted-foreground h-12 w-12 sm:h-16 sm:w-16" />
        <h1 className="mt-6 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
          {title}
        </h1>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
          {description}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button onClick={handleBack} className="w-full sm:w-auto">
            <Undo className="mr-2 h-4 w-4" /> Back to previous page
          </Button>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
