'use client';

import AppPagination from '@/components/common/pagination/AppPagination';
import { cn } from '@/lib/utils';
import { IMeta } from '@/types';
import { ReactNode, useTransition } from 'react';
import CenterSpinner from '../loader/CenterSpinner';

interface Props {
  children: ReactNode;
  meta?: IMeta;
  loader?: ReactNode;
}

const ClientWrapper = ({
  children,
  meta,
  loader = <CenterSpinner />,
}: Props) => {
  const [isPending, startTransition] = useTransition();

  return (
    <section className="relative">
      {/* Content Area */}
      <div className="relative">
        <div className={cn(isPending && 'opacity-20')}>{children}</div>

        {/* Centered Loader OVER content */}
        {isPending && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            {loader}
          </div>
        )}
      </div>

      {/* Pagination */}
      {meta && (
        <div className={cn(isPending && 'pointer-events-none opacity-50')}>
          <AppPagination meta={meta} startTransition={startTransition} />
        </div>
      )}
    </section>
  );
};

export default ClientWrapper;
