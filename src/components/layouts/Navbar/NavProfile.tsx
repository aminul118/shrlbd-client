'use client';

import ButtonSpinner from '@/components/common/loader/ButtonSpinner';
import LogOutDropDown from '@/components/modules/Authentication/log-out-dropdown';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AppDataContext } from '@/context/auth-context';
import { Role } from '@/types';
import { UserRound } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';

const NavProfile = () => {
  const context = useContext(AppDataContext);
  console.log(context);
  const user = context?.userData;
  const userLoading = context?.userLoading;

  if (userLoading) {
    return (
      <div className="flex items-center justify-center">
        <ButtonSpinner size={28} />
      </div>
    );
  }

  // 🔹 When user is logged in
  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="focus:outline-none">
            <Avatar className="h-8 w-8 rounded-lg bg-slate-800">
              <AvatarImage
                src={user.picture || '/profile.jpg'}
                alt={user.fullName || 'User'}
              />
              <AvatarFallback className="rounded-lg">
                {user.firstName?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="mt-3 w-56 text-center shadow-lg"
          align="end"
        >
          {/* Profile Summary */}
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex flex-col items-center gap-2 px-3 py-2 text-sm">
              <Avatar className="h-20 w-20 rounded-full bg-slate-800">
                <AvatarImage
                  src={user.picture || '/profile.jpg'}
                  alt={user.fullName || 'User'}
                />
                <AvatarFallback className="rounded-full">
                  {user.firstName?.charAt(0) || 'U'}
                </AvatarFallback>
              </Avatar>

              <div className="grid text-sm leading-tight">
                <span className="truncate font-medium">{user.fullName}</span>
                <span className="text-muted-foreground truncate text-xs">
                  {user.email}
                </span>
              </div>
            </div>
            {/* ✅ View Profile closes menu automatically now */}
            <DropdownMenuItem asChild>
              <Button asChild className="mx-auto mb-2 h-8 w-32">
                <Link
                  href="/profile"
                  className="flex items-center justify-center gap-2"
                >
                  <UserRound size={16} /> View Profile
                </Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          {user.role === Role.ADMIN ? (
            <DropdownMenuItem asChild>
              <Link
                href="/admin"
                className="flex items-center justify-center gap-2"
              >
                Admin Dashboard
              </Link>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem asChild>
              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-2"
              >
                Dashboard
              </Link>
            </DropdownMenuItem>
          )}

          <DropdownMenuSeparator />

          <LogOutDropDown className="justify-center" />
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // 🔹 When user is NOT logged in
  return (
    <Button variant="destructive" size="sm" className="text-sm">
      <Link href="/login">Portal</Link>
    </Button>
  );
};

export default NavProfile;
