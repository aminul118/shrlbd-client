'use client';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { getTeamMembers } from '@/services/team/team-member';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import ButtonSpinner from '../loader/ButtonSpinner';

export default function SearchTeamMember() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [membersFromApi, setMembersFromApi] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // 🔹 Static members (shown before typing)
  const staticMembers = useMemo(
    () => [
      { _id: '1', name: 'Professor Dr. Fatema Ashraf', slug: 'fatema' },
      {
        _id: '2',
        name: 'Prof. Dr. Sharmeen Yasmeen',
        slug: 'sharmeen-yasmeen',
      },
      { _id: '3', name: 'Dr. Moomtahina Fatima', slug: 'moomtahina' },
      { _id: '4', name: 'Furkan Hossain', slug: 'furkan' },
    ],
    [],
  );

  // 🔹 Fetch only when user types
  useEffect(() => {
    if (!search) return;

    const fetchMembers = async () => {
      try {
        setLoading(true);
        const res = await getTeamMembers({ search });
        setMembersFromApi(res?.data ?? []);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [search]);

  // 🔹 Decide which list to show
  const members = search.length === 0 ? staticMembers : membersFromApi;

  return (
    <div className="w-full min-w-3xs">
      <Button
        variant="outline"
        className="text-muted-foreground w-full justify-start"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span>Search team...</span>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search team..."
          value={search}
          onValueChange={setSearch}
        />

        <CommandList>
          {loading && search.length > 0 && <ButtonSpinner className="py-2" />}

          <CommandEmpty>No team member found.</CommandEmpty>

          <CommandGroup heading="Team Members">
            {members.map((member) => (
              <CommandItem
                key={member._id}
                onSelect={() => {
                  setOpen(false);
                  router.push(`/team/${member.slug}`);
                }}
              >
                {member.name}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup>
            {members.length > 0 && (
              <CommandItem asChild>
                <Link href="/team">Show All</Link>
              </CommandItem>
            )}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
