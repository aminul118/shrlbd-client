import Profile from '@/components/modules/Root/profile/Profile';
import { Metadata } from 'next';

const ProfilePage = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export default ProfilePage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Profile | SHRL',
};
// >> SEO End
