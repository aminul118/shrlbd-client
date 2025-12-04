'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import DateFormat from '@/components/common/date-format';
import NotFound from '@/components/common/error/NotFound';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import TableSkeleton from '@/components/common/loader/TableSkeleton';
import PageLimit from '@/components/common/pagination/PageLimit';
import TablePagination from '@/components/common/pagination/TablePagination';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import GradientTitle from '@/components/ui/gradientTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetUpcomingEventsQuery } from '@/redux/features/upcoming-event/upcomingEvent.api';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import UpcomingEventActions from './UpcomingEventActions';

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
                    <UpcomingEventActions event={event} />
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>

      {/* 🔹 Pagination */}
      {meta && <TablePagination meta={meta} />}
    </Container>
  );
};

export default UpcomingEventsTable;
