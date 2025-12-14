import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import PageLimit from '@/components/common/pagination/PageLimit';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const BlogsFilters = () => {
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
          <Button asChild>
            <Link href="/admin/add-blog">
              <Plus /> Add Blog
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogsFilters;
