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
import { useRouter, useSearchParams } from 'next/navigation';

interface RowPerPage {
  label?: string;
  totalPage: number;
  pageNumbers?: number[];
}

const RowPerPage = ({
  label = 'Show per page :',
  totalPage,
  pageNumbers = [1, 2, 3, 4, 10, 15, 20, 25, 30],
}: RowPerPage) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const limit = searchParams.get('limit');

  const handlePageLimitChange = (newLimit: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('limit', newLimit);
    router.push(`?${params.toString()}`);
  };

  if (totalPage <= 1) return null;

  return (
    <div className="flex items-center gap-2">
      <Label className="whitespace-nowrap">{label}</Label>
      <Select
        onValueChange={handlePageLimitChange}
        defaultValue={limit ? limit : '10'}
      >
        <SelectTrigger className="w-[100px]">
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

export default RowPerPage;
