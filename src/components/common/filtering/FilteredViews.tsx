'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Columns3 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface FilteredViewsProps {
  className?: string;
  defaultColumns: Record<string, boolean>; // e.g. { name: true, email: true, status: false }
  onChange?: (columns: Record<string, boolean>) => void;
}

const FilteredViews = ({ defaultColumns, onChange }: FilteredViewsProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [columns, setColumns] =
    useState<Record<string, boolean>>(defaultColumns);

  // ✅ Initialize from URL fields safely
  useEffect(() => {
    const fields = searchParams.get('fields');
    if (fields) {
      const activeFields = fields.split(',');
      const updated = Object.fromEntries(
        Object.keys(defaultColumns).map((key) => [
          key,
          activeFields.includes(key),
        ]),
      );

      // ✅ prevent infinite re-render loop
      const isDifferent = JSON.stringify(updated) !== JSON.stringify(columns);
      if (isDifferent) {
        setColumns(updated);
        onChange?.(updated);
      }
    }
  }, [searchParams, defaultColumns, columns, onChange]);

  // ✅ Toggle column & update URL
  const toggleColumn = (key: string) => {
    const updated = { ...columns, [key]: !columns[key] };
    setColumns(updated);

    const activeFields = Object.keys(updated).filter((k) => updated[k]);
    const params = new URLSearchParams(searchParams.toString());

    if (activeFields.length > 0) {
      params.set('fields', activeFields.join(','));
    } else {
      params.delete('fields');
    }

    router.push(`?${params.toString()}`);
    onChange?.(updated);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Columns3 className="mr-2 h-4 w-4" /> View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-xs">
          Toggle columns
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.keys(columns).map((key) => (
          <DropdownMenuCheckboxItem
            key={key}
            checked={columns[key]}
            onCheckedChange={() => toggleColumn(key)}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilteredViews;
