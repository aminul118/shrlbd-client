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
}: TableSkeletonProps) => {
  return (
    <Container className="overflow-x-hidden">
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
    </Container>
  );
};

export default TableSkeleton;
