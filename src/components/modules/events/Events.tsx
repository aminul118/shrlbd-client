'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import EventPageLoading from '@/app/(root)/(events)/events/loading';
import DateFormat from '@/components/common/date-format';
import NotFound from '@/components/common/error/NotFound';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import AppPagination from '@/components/common/pagination/AppPagination';
import GoToPage from '@/components/common/pagination/GoToPage';
import PageLimit from '@/components/common/pagination/PageLimit';
import PaginationStatus from '@/components/common/pagination/PaginationStatus';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import GrediantHeading from '@/components/ui/GrediantHeading';
import { useGetEventQuery } from '@/redux/features/event/event.api';
import { IEvent } from '@/types';
import getSearchParams from '@/utils/getSearchParams';

import Image from 'next/image';
import Link from 'next/link';

const Events = () => {
  const { page, limit, search, sort } = getSearchParams([
    'page',
    'limit',
    'search',
    'sort',
  ]);

  const params = {
    search,
    page,
    limit,
    sort,
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
              return <Event key={event._id} {...event} />;
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

const Event = ({ _id, createdAt, photos, slug, title }: IEvent) => {
  return (
    <>
      <Link key={_id} href={`/events/${slug}`}>
        <Card className="overflow-hidden pt-0">
          <div className="relative overflow-hidden">
            <Image
              src={photos[0]}
              width={400}
              height={200}
              alt={title}
              className="h-48 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 xl:h-70"
            />
          </div>

          <CardContent>
            <CardTitle className="mb-1 text-lg font-semibold">
              {title}
            </CardTitle>
            <p className="mb-2 text-xs text-gray-500">
              Post Date: <DateFormat date={createdAt} />
            </p>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default Events;
