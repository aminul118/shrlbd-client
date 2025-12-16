import RefreshButton from '@/components/common/button/refresh-button';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import PageLimit from '@/components/common/pagination/PageLimit';
import SearchFilter from '@/components/common/searching/SearchFilter';
import Sorting from '@/components/common/sorting/Sorting';
import AddScrollingTextModal from './AddScrollingTextModal';

const ScrollingFilters = () => {
  return (
    <div className="pb-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <SearchFilter />
        <div className="flex flex-wrap items-center justify-end gap-2">
          <PageLimit pageNumbers={[10, 20, 30, 40]} />
          <Sorting
            sortOptions={[
              { name: 'Ascending', value: '-createdAt' },
              { name: 'Descending', value: 'createdAt' },
            ]}
          />
          <ClearAllFilter />
          <RefreshButton />
          <AddScrollingTextModal />
        </div>
      </div>
    </div>
  );
};

export default ScrollingFilters;
