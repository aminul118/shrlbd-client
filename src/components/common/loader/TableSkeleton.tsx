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

const TableSkeleton = () => {
  return (
    <Container className="overflow-x-hidden">
      <Table>
        <TableHeader className="bg-muted text-white">
          <TableRow>
            <TableHead>
              <Skeleton className="h-4 w-6" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-6" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-6" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-6" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-6" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-6" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-6" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-6" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-4 w-6" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-10 w-10 rounded-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-40" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-16" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-20 rounded-md" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-28" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-8 w-8 rounded-md" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default TableSkeleton;
