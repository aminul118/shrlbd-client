'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import { IMeta } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';

interface IPaginationProps {
  meta: IMeta;
  className?: string;
}

const AppPagination = ({ meta, className }: IPaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { page, totalPage } = meta;

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`);
  };

  if (totalPage <= 1) return null;

  return (
    <Pagination className={cn('py-6 md:py-8 lg:py-12', className)}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={cn(page <= 1 && 'pointer-events-none opacity-50')}
            onClick={() => page > 1 && handlePageChange(page - 1)}
            aria-disabled={page <= 1}
          />
        </PaginationItem>

        {Array.from({ length: totalPage }).map((_, i) => {
          const pageIndex = i + 1;
          return (
            <PaginationItem key={pageIndex}>
              <PaginationLink
                isActive={pageIndex === page}
                onClick={() => handlePageChange(pageIndex)}
              >
                {pageIndex}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            className={cn(
              page >= totalPage && 'pointer-events-none opacity-50',
            )}
            onClick={() => page < totalPage && handlePageChange(page + 1)}
            aria-disabled={page >= totalPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default AppPagination;
