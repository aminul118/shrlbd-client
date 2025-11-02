'use client';
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
import { useGetEventQuery } from '@/redux/features/event/event.api';
import { IEvent, IMeta } from '@/types';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import EventActions from './EventActions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PreviousEventTable = ({ props }: { props: Record<string, any> }) => {
  const params = {
    ...props,
  };
  const { data, isLoading, isFetching } = useGetEventQuery(params);
  const events = data?.data || [];
  const meta = data?.meta;

  if (isLoading || isFetching) return <TableSkeleton />;

  return (
    <Container>
      <div className="mb-4 flex items-center justify-between">
        <GradientTitle title="All Previous Events" />
      </div>
      <EventFilter />
      {/* Main Content */}
      <EventTable events={events} />
      <EventsPagination meta={meta} />
    </Container>
  );
};

const EventTable = ({ events }: { events: IEvent[] }) => {
  return (
    <div>
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead>SI</TableHead>
            <TableHead>Photo</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events?.length === 0 ? (
            <>
              <TableRow className="hover:bg-primary/10">
                <TableCell colSpan={5} className="py-4 text-center">
                  <NotFound />
                </TableCell>
              </TableRow>
            </>
          ) : (
            <>
              {events?.map((event, i: number) => (
                <TableRow key={event._id} className="hover:bg-primary/10">
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>
                    {event.photos && event.photos.length > 0 ? (
                      <Image
                        src={event.photos[0]}
                        alt={event.title}
                        width={60}
                        height={60}
                        className="h-12 w-12 rounded-md object-cover"
                      />
                    ) : (
                      <span className="text-gray-400">No Photo</span>
                    )}
                  </TableCell>
                  <TableCell>{event.title}</TableCell>
                  <TableCell>
                    <DateFormat date={event.createdAt} />
                  </TableCell>
                  <TableCell>
                    <EventActions event={event} />
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

// Event Filter

const EventFilter = () => {
  return (
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
            <Link href="/admin/add-previous-event">
              <Plus /> Add Event
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Events Pagination

const EventsPagination = ({ meta }: { meta?: IMeta }) => {
  if (!meta) return null;

  return (
    <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
      <GoToPage totalPage={meta.totalPage} />
      <div className="flex items-center gap-4">
        <PaginationStatus meta={meta} />
        <AppPagination className="justify-end" meta={meta} />
      </div>
    </div>
  );
};

export default PreviousEventTable;
