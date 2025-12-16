import TableSkeleton from '@/components/common/loader/TableSkeleton';

const AiTrainingsLoading = () => {
  return (
    <TableSkeleton
      tableColumns={[
        { width: '6', height: '4' },
        { width: '40', height: '4' },
        { width: '24', height: '4' },
        { width: '24', height: '4' },
        { width: '8', height: '8', rounded: 'rounded-md' },
      ]}
      hasFilter
      filterColumns={[
        { width: '28', height: '10', rounded: 'rounded-md' },
        { width: '32', height: '10', rounded: 'rounded-md' },
        { width: '28', height: '10', rounded: 'rounded-md' },
        { width: '32', height: '10', rounded: 'rounded-md' },
        { width: '44', height: '10', rounded: 'rounded-md' },
      ]}
    />
  );
};

export default AiTrainingsLoading;
