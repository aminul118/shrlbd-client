'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import GradientTitle from '@/components/ui/gradientTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetUpcomingEventsQuery } from '@/redux/features/event/event.api';

import DateFormat from '@/components/common/date-format';
import NotFound from '@/components/common/error/NotFound';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import TableSkeleton from '@/components/common/loader/TableSkeleton';
import AppPagination from '@/components/common/pagination/AppPagination';
import GoToPage from '@/components/common/pagination/GoToPage';
import PageLimit from '@/components/common/pagination/PageLimit';
import PaginationStatus from '@/components/common/pagination/PaginationStatus';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import Container from '@/components/ui/Container';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import DeleteUpcomingEvent from './DeleteUpcomingEvent';

const UpcomingEventsTable = ({ props }: { props: Record<string, any> }) => {
  const params = {
    ...props,
  };
  const { data, isLoading } = useGetUpcomingEventsQuery(params);
  const meta = data?.meta;
  const upcomingEvents = data?.data;

  if (isLoading) {
    return <TableSkeleton />;
  }

  return (
    <Container>
      {/* 🔹 Header + Filters */}
      <div className="mb-4 flex items-center justify-between">
        <GradientTitle title="All Upcoming Events" />
      </div>
      <div className="pb-8">
        <div className="flex items-center justify-between gap-2">
          <AppSearching />
          <div className="flex items-center justify-between gap-2">
            <PageLimit pageNumbers={[10, 20, 30, 40]} />
            <Sorting
              sortOptions={[
                { name: 'Ascending', value: '-createdAt' },
                { name: 'Descending', value: 'createdAt' },
              ]}
            />

            <ClearAllFilter />
            <Button asChild>
              <Link href="/admin/add-upcoming-event">
                <Plus />
                Add Upcoming Event
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead>SI</TableHead>
            <TableHead>Photo</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {upcomingEvents?.length === 0 ? (
            <>
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  <NotFound />
                </TableCell>
              </TableRow>
            </>
          ) : (
            <>
              {upcomingEvents?.map((event, index: number) => (
                <TableRow key={event._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={event.photo} alt={event.title} />
                      <AvatarFallback>{event.title?.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell>{event.title}</TableCell>
                  <TableCell>
                    <DateFormat date={event.createdAt} />
                  </TableCell>
                  <TableCell>{event.time}</TableCell>
                  <TableCell className="space-x-2">
                    <DeleteUpcomingEvent id={event._id} />
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>

      {/* 🔹 Pagination */}
      {meta && (
        <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <GoToPage totalPage={meta.totalPage} />
          <div className="flex items-center gap-4">
            <PaginationStatus meta={meta} />
            <AppPagination className="justify-end" meta={meta} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default UpcomingEventsTable;
