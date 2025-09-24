'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface SearchingProps {
  placeholder?: string;
  className?: string;
}

const AppSearching = ({
  placeholder = 'Searching ...',
  className,
}: SearchingProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const [query, setQuery] = useState(searchQuery);

  // 🔑 sync input value with query params
  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }
    router.push(`?${params.toString()}`);
  };

  const handleClearSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('search');
    setQuery('');
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Input
        type="text"
        placeholder={placeholder}
        className={cn('lg:w-xs', className)}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="flex space-x-2">
        <Button onClick={handleSearch}>
          <Search size={16} /> <span className="hidden lg:block">Search</span>
        </Button>
        {searchQuery && (
          <Button
            className="bg-red-500 text-white hover:bg-red-500"
            onClick={handleClearSearch}
          >
            <X size={16} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default AppSearching;
