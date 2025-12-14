import TableSkeleton from '@/components/common/loader/TableSkeleton';

const TeamJoinRequestPageLoading = () => {
  return <TableSkeleton rows={10} hasFilter hasPagination />;
};

export default TeamJoinRequestPageLoading;
