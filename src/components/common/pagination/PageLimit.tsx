'use client';

import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

interface PageLimitProps {
  label?: string;
  pageNumbers?: number[];
  className?: string;
}

const PageLimit = ({
  label = 'Show :',
  className,
  pageNumbers = [10, 20, 30, 40, 50],
}: PageLimitProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // read current limit or default to "10"
  const limit = searchParams.get('limit') ?? '10';

  const handlePageLimitChange = (newLimit: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('limit', newLimit); // always set limit
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Label className="whitespace-nowrap">{label}</Label>
      <Select onValueChange={handlePageLimitChange} value={limit}>
        <SelectTrigger className={cn('w-20', className)}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {pageNumbers.map((page) => (
              <SelectItem key={page} value={page.toString()}>
                {page}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default PageLimit;
