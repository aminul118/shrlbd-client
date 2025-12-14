import TableSkeleton from '@/components/common/loader/TableSkeleton';

const PreviousEventLoading = () => {
  return (
    <div>
      <TableSkeleton rows={10} hasFilter hasPagination />
    </div>
  );
};

export default PreviousEventLoading;
