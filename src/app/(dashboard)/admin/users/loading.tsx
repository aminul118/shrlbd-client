import TableSkeleton from '@/components/common/loader/TableSkeleton';

const UserPageLoading = () => {
  return (
    <TableSkeleton
      filterColumns={[
        { width: '36', height: '10' },
        { width: '36', height: '10' },
        { width: '24', height: '10' },
        { width: '24', height: '10' },
        { width: '24', height: '10' },
      ]}
      rows={10}
      hasFilter
      hasPagination
    />
  );
};

export default UserPageLoading;
