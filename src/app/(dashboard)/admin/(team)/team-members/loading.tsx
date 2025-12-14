import TableSkeleton from '@/components/common/loader/TableSkeleton';

const loading = () => {
  return (
    <>
      <TableSkeleton rows={10} hasFilter hasPagination />
    </>
  );
};

export default loading;
