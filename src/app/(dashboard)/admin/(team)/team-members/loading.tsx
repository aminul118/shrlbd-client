import TableSkeleton from '@/components/common/loader/TableSkeleton';

const TeamMembersLoading = () => {
  return (
    <>
      <TableSkeleton
        tableColumns={[
          { width: '6', height: '4' },
          { width: '10', height: '10', rounded: 'rounded-full' },
          { width: '24', height: '4' },
          { width: '40', height: '4' },
          { width: '16', height: '4' },
          { width: '16', height: '4' },
          { width: '6', height: '6', rounded: 'rounded-md' },
        ]}
        rows={10}
        hasFilter
        hasPagination
      />
    </>
  );
};

export default TeamMembersLoading;
