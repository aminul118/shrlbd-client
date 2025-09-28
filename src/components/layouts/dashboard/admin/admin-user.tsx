'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Logout from './Logout';

export default function AdminUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer border">
          <AvatarImage src="https://github.com/shadcn.png" alt="Admin avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64 p-2" align="start" sideOffset={8}>
        {/* Profile Header */}
        <DropdownMenuLabel className="flex flex-col items-center gap-2 pb-3 text-center">
          <Avatar className="h-14 w-14 border">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Admin avatar"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Md. Aminul Islam</p>
            <p className="text-muted-foreground text-xs">Admin</p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Actions */}
        <DropdownMenuGroup>
          <DropdownMenuItem className="justify-center">
            <span className="text-sm">View Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Logout */}
        <DropdownMenuGroup>
          <DropdownMenuItem className="justify-center text-red-600">
            <Logout />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
