'use client';
import ButtonSpinner from '@/components/common/loader/ButtonSpinner';
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
import { authApi, useLogoutMutation } from '@/redux/features/auth/auth.api';
import { useAppDispatch } from '@/redux/hook';
import { Role } from '@/types';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { useContext } from 'react';
import { toast } from 'sonner';

const NavProfile = () => {
  const context = useContext(AppDataContext);
  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const user = context?.userData;

  //   User Log out Handler
  const handleLogout = async () => {
    try {
      const res = await logout(undefined).unwrap();
      dispatch(authApi.util.resetApiState());
      toast.success(res.message);
    } catch {
      toast.error('Log out failed..');
    }
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="h-8 w-8 rounded-lg bg-slate-800">
            <AvatarImage
              src={user?.picture ? user?.picture : '/profile.jpg'}
              alt={user?.fullName}
            />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-5 w-56 text-center" align="center">
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex flex-col items-center justify-center gap-2 px-1 py-1.5 text-center text-sm">
              <Avatar className="h-20 w-20 rounded-full bg-slate-800">
                <AvatarImage
                  src={user?.picture ? user?.picture : '/profile.jpg'}
                  alt={user?.fullName}
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-sm leading-tight">
                <span className="truncate font-medium">{user?.fullName}</span>
                <span className="text-muted-foreground truncate text-xs">
                  {user?.email}
                </span>
                <Button className="mt-2">
                  <Link href={'/profile'}>Profile</Link>
                </Button>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {user?.role === Role.ADMIN ? (
              <>
                <Link href={'/admin'}>Dashboard</Link>
              </>
            ) : (
              <>
                <Link href={'/dashboard'}>Dashboard</Link>
              </>
            )}
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} disabled={isLoading}>
            {isLoading ? (
              <>
                <ButtonSpinner /> Log out
              </>
            ) : (
              <>
                <LogOut /> Log out
              </>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavProfile;
