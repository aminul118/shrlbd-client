import { IconBell } from '@tabler/icons-react';

import { Button } from '@/components/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import Link from 'next/link';

export function EmptyMuted() {
  return (
    <Empty className="from-muted/50 to-background h-screen bg-gradient-to-b from-30%">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconBell />
        </EmptyMedia>
        <EmptyTitle>Coming Soon...</EmptyTitle>
        <EmptyDescription>
          You&apos;re all caught up. New notifications will appear here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          <Link href="/">Go to Home</Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
