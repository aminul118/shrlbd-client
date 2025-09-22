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
import { DivProps } from '@/types';
import { ArrowDownUp } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

interface SortByProps extends DivProps {
  label?: string;
  sortNames?: string[];
  labelInSelect?: boolean;
  className?: string;
}

const Sorting = ({
  label = 'Sort By :',
  sortNames = ['asc', 'desc'],
  labelInSelect,
  className,
  ...props
}: SortByProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentSorting = searchParams.get('sort') || 'default';

  const handleSortChange = (newValue: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newValue === 'default') {
      params.delete('sort');
    } else {
      params.set('sort', newValue);
    }

    const queryString = params.toString();
    router.push(queryString ? `?${queryString}` : '?');
  };

  return (
    <div className="flex items-center gap-2" {...props}>
      {!labelInSelect && <Label className="whitespace-nowrap">{label}</Label>}
      <Select onValueChange={handleSortChange} value={currentSorting}>
        <SelectTrigger className={cn('w-full', className)}>
          {labelInSelect ? (
            <span className="flex items-center gap-1">
              <ArrowDownUp /> {label}
              <SelectValue placeholder="Default" />
            </span>
          ) : (
            <SelectValue placeholder="Default" />
          )}
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="default"> Default</SelectItem>
            {sortNames.map((sort) => (
              <SelectItem key={sort} value={sort} className="capitalize">
                {sort.charAt(0).toUpperCase() + sort.slice(1)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Sorting;
