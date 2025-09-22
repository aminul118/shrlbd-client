'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface SearchingProps {
  placeholder?: string;
  className?: string;
}

const AppSearching = ({
  placeholder = 'Searching ...',
  className,
  ...props
}: SearchingProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || ''; // read current URL

  const [query, setQuery] = useState(searchQuery); // local state for input

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
    setQuery(''); // clear input field
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-2" {...props}>
      <Input
        type="text"
        placeholder={placeholder}
        className={cn('w-56', className)}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="flex space-x-2">
        <Button onClick={handleSearch}>
          <Search /> Search
        </Button>
        {searchQuery && (
          <Button className="bg-red-500 text-white" onClick={handleClearSearch}>
            <X />
          </Button>
        )}
      </div>
    </div>
  );
};

export default AppSearching;
