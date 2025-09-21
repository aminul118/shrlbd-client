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

const OrderBy = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentSorting = Number(searchParams.get('sort')) || '';
  const sortArr = ['asc', 'desc'];

  const handlePageLimitChange = (newLimit: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', newLimit);
    router.push(`?${params.toString()}`);
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <Label className="whitespace-nowrap">Sort by :</Label>
        <Select
          onValueChange={handlePageLimitChange}
          defaultValue={currentSorting.toString()}
        >
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {sortArr.map((page) => (
                <SelectItem key={page} value={page.toString()}>
                  {page}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default OrderBy;
