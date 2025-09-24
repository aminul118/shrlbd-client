'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import EventPageLoading from '@/app/(root)/(events)/events/loading';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import NotFound from '@/components/common/NotFound';
import AppPagination from '@/components/common/pagination/AppPagination';
import GoToPage from '@/components/common/pagination/GoToPage';
import PageLimit from '@/components/common/pagination/PageLimit';
import PaginationStatus from '@/components/common/pagination/PaginationStatus';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import Container from '@/components/ui/Container';
import GrediantHeading from '@/components/ui/GrediantHeading';
import { useGetEventQuery } from '@/redux/features/event/event.api';
import EventCard from './EventCard';

const Events = ({ props }: { props: Record<string, any> }) => {
  const params = {
    ...props,
  };
  const { data, isLoading, isFetching } = useGetEventQuery(params);

  if (isLoading || isFetching) {
    return <EventPageLoading />;
  }

  const events = data?.data;
  const meta = data?.meta;
  const sortOptions = [
    {
      name: 'Ascending',
      value: '-createdAt',
    },
    {
      name: 'Descending',
      value: 'createdAt',
    },
    {
      name: 'Title',
      value: 'title',
    },
  ];

  return (
    <Container>
      {events?.length === 0 ? (
        <>
          <NotFound title="Events not found" />
        </>
      ) : (
        <>
          <GrediantHeading heading="Events" />
          <div className="flex justify-between">
            <AppSearching />
            <div className="hidden justify-between gap-3 lg:flex">
              <PageLimit />
              <Sorting sortOptions={sortOptions} />
              <ClearAllFilter />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events?.map((event) => {
              return <EventCard key={event._id} event={event} />;
            })}
          </div>
          {meta && (
            <div className="flex items-center justify-center lg:justify-between">
              <GoToPage totalPage={meta.totalPage} />
              <div className="flex items-center gap-4">
                <PaginationStatus meta={meta} />
                <AppPagination className="justify-end" meta={meta} />
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default Events;
