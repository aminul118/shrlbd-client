import TableSkeleton from '@/components/common/loader/TableSkeleton';

const AiTrainingsLoading = () => {
  return <TableSkeleton rows={10} hasFilter hasPagination />;
};

export default AiTrainingsLoading;
