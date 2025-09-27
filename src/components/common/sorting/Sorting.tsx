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
import { ArrowDownUp } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

interface SortOption {
  name: string;
  value: string;
}

interface SortByProps {
  label?: string;
  sortOptions?: SortOption[];
  labelInSelect?: boolean;
  className?: string;
}

const Sorting = ({
  label = 'Sort By :',
  labelInSelect,
  className,
  sortOptions = [
    {
      name: 'Ascending',
      value: 'asc',
    },
    {
      name: 'Descending',
      value: 'dsc',
    },
  ],
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
    <div className={cn('flex items-center gap-2', className)}>
      {labelInSelect ?? <Label className="whitespace-nowrap">{label}</Label>}
      <Select onValueChange={handleSortChange} value={currentSorting}>
        <SelectTrigger className={cn('w-full')}>
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
            <SelectItem value="default">Default</SelectItem>
            {sortOptions.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="capitalize"
              >
                {option.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Sorting;
