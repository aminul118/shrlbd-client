'use client';

import ButtonSpinner from '@/components/common/loader/ButtonSpinner';
import { Button } from '@/components/ui/button';
import { authApi, useLogoutMutation } from '@/redux/features/auth/auth.api';
import { useAppDispatch } from '@/redux/hook';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const Logout = () => {
  const dispatch = useAppDispatch();
  const [logout, { isLoading }] = useLogoutMutation();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await logout(undefined).unwrap();
      dispatch(authApi.util.resetApiState());
      toast.success(res.message);
      router.push('/login');
    } catch {
      toast.error('Log out failed..');
    }
  };

  return (
    <Button className="w-full" onClick={handleLogout} disabled={isLoading}>
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <>
          <LogOut /> Log out
        </>
      )}
    </Button>
  );
};

export default Logout;
