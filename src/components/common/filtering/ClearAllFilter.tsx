'use client';

import { Button } from '@/components/ui/button';
import { Undo } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const ClearAllFilter = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClear = () => {
    router.push(pathname); // navigate to same page without query
  };

  return (
    <div>
      <Button onClick={handleClear}>
        <Undo size={20} /> Clear Filter
      </Button>
    </div>
  );
};

export default ClearAllFilter;
