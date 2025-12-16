'use client';

import RefreshButton from '@/components/common/button/refresh-button';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import PageLimit from '@/components/common/pagination/PageLimit';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import AddAiTrainingsModal from './AddAiTrainingsModal';

const AiTrainngsFilters = () => {
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between gap-2">
        <AppSearching />
        <div className="flex items-center justify-between gap-2">
          <PageLimit pageNumbers={[10, 20, 30, 40]} />
          <Sorting
            sortOptions={[
              { name: 'Ascending', value: '-createdAt' },
              { name: 'Descending', value: 'createdAt' },
            ]}
          />
          <ClearAllFilter />
          <RefreshButton />
          <AddAiTrainingsModal />
        </div>
      </div>
    </div>
  );
};

export default AiTrainngsFilters;
