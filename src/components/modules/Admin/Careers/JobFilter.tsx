import RefreshButton from '@/components/common/button/refresh-button';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import PageLimit from '@/components/common/pagination/PageLimit';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import AddJobModal from './AddJobModal';
import AddJobTypeModal from './AddJobTypeModal';

const JobFilters = () => {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <AppSearching />

      <div className="flex items-center gap-3">
        <PageLimit pageNumbers={[10, 20, 30, 40]} />
        <Sorting
          sortOptions={[
            { name: 'Ascending', value: '-createdAt' },
            { name: 'Descending', value: 'createdAt' },
          ]}
        />
        <ClearAllFilter />
        <RefreshButton />
        <AddJobModal />
        <AddJobTypeModal />
      </div>
    </div>
  );
};

export default JobFilters;
