import TableSkeleton from '@/components/common/loader/TableSkeleton';

const JobPostsLoading = () => {
  return (
    <TableSkeleton
      tableColumns={[
        { width: '6', height: '4' },
        { width: '40', height: '4' },
        { width: '24', height: '4' },
        { width: '8', height: '8', rounded: 'rounded-md' },
      ]}
      hasFilter
      filterColumns={[
        { width: '20', height: '10' },
        { width: '32', height: '10' },
        { width: '20', height: '10' },
        { width: '32', height: '10' },
        { width: '20', height: '10' },
        { width: '32', height: '10' },
      ]}
      rows={2}
    />
  );
};

export default JobPostsLoading;
