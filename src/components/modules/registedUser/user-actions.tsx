'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUpdateRoleMutation } from '@/redux/features/auth/auth.api';
import { EllipsisIcon } from 'lucide-react';
import { toast } from 'sonner';

interface UserProps {
  role: 'ADMIN' | 'USER';
  userId: string;
}

const UserActions = ({ role, userId }: UserProps) => {
  const [updateRole] = useUpdateRoleMutation();

  const handleRoleChange = async () => {
    try {
      const newRole = role === 'USER' ? 'ADMIN' : 'USER';
      const result = await updateRole({
        id: userId,
        userInfo: { role: newRole },
      }).unwrap();
      console.log('Role updated:', result);
      toast.success(result.message);
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-end">
          <Button
            size="icon"
            variant="ghost"
            className="shadow-none"
            aria-label="Edit item"
          >
            <EllipsisIcon size={16} aria-hidden="true" />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-48">
        {role === 'USER' && (
          <DropdownMenuItem onClick={handleRoleChange}>
            <span>Promote to Admin</span>
          </DropdownMenuItem>
        )}
        {role === 'ADMIN' && (
          <DropdownMenuItem onClick={handleRoleChange}>
            <span>Demote to User</span>
          </DropdownMenuItem>
        )}

        {role !== 'ADMIN' && <DropdownMenuSeparator />}
        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <span>Delete</span>
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserActions;
