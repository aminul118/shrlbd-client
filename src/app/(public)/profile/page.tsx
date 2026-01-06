import Profile from '@/components/modules/Public/profile/Profile';
import { getMe } from '@/services/user/users';
import { Metadata } from 'next';

const ProfilePage = async () => {
  const { data } = await getMe();
  return (
    <>
      <Profile user={data} />
    </>
  );
};

export default ProfilePage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Profile | SHRL',
};
// >> SEO End
