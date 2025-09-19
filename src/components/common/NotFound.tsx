// components/common/NotFound.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NotFoundProps {
  title?: string;
  description?: string;
  action?: ReactNode;
}

const NotFound = ({
  title = 'Data not found',
  description = 'When admin adds some data, you will find it here.',
  action,
}: NotFoundProps) => {
  return (
    <div className="flex min-h-[calc(100vh-440px)] flex-col items-center justify-center py-20 text-center">
      <Frown className="text-muted-foreground h-16 w-16" />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground mt-2">{description}</p>

      <div className="mt-6 flex gap-4">
        {action ? (
          action
        ) : (
          <div className="mt-6 flex gap-4">
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFound;
