import Container from '@/components/ui/Container';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface ColumnConfig {
  width?: string;
  height?: string;
  rounded?: string;
}

interface TableSkeletonProps {
  columns?: ColumnConfig[];
  rows?: number;
  hasFilter?: boolean;
  hasPagination?: boolean;
}

const TableSkeleton = ({
  columns = [
    { width: '6', height: '4' },
    { width: '10', height: '10', rounded: 'rounded-full' },
    { width: '24', height: '4' },
    { width: '40', height: '4' },
    { width: '16', height: '4' },
    { width: '20', height: '6', rounded: 'rounded-md' },
    { width: '28', height: '4' },
    { width: '8', height: '8', rounded: 'rounded-md' },
  ],
  rows = 2,
  hasFilter,
  hasPagination,
}: TableSkeletonProps) => {
  return (
    <Container className="overflow-x-hidden">
      <Skeleton className="mb-8 h-10 w-96 rounded-md" />
      {hasFilter && <FilterSkeleton />}

      <Table>
        {/* ---- HEADER ---- */}
        <TableHeader className="bg-muted text-white">
          <TableRow>
            {columns.map((col, idx) => (
              <TableHead key={idx}>
                <Skeleton
                  className={`h-${col.height || '4'} w-${col.width || '20'} ${
                    col.rounded ?? ''
                  }`}
                />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* ---- BODY ---- */}
        <TableBody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton
                    className={`h-${col.height || '4'} w-${col.width || '20'} ${
                      col.rounded ?? ''
                    }`}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination skeleton */}
      {hasPagination && <PaginationSkeleton />}
    </Container>
  );
};

const FilterSkeleton = () => {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
      {/* Search */}
      <Skeleton className="h-10 w-64 rounded-md" />

      {/* Right side actions */}
      <div className="flex flex-wrap items-center gap-2">
        <Skeleton className="h-10 w-24 rounded-md" />
        <Skeleton className="h-10 w-32 rounded-md" />
        <Skeleton className="h-10 w-28 rounded-md" />
        <Skeleton className="h-10 w-44 rounded-md" />
      </div>
    </div>
  );
};

const PaginationSkeleton = () => {
  return (
    <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
      {/* GoToPage */}
      <Skeleton className="h-10 w-40 rounded-md" />

      {/* Status + Pagination */}
      <div className="flex items-center gap-4">
        {/* PaginationStatus */}
        <Skeleton className="h-5 w-32 rounded-md" />

        {/* AppPagination */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-9 rounded-md" />
          <Skeleton className="h-9 w-9 rounded-md" />
          <Skeleton className="h-9 w-9 rounded-md" />
          <Skeleton className="h-9 w-9 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
