import EventStats from '@/components/modules/Admin/EventStats';
import TeamStats from '@/components/modules/Admin/TeamStats';
import UserStats from '@/components/modules/Admin/UserStats';
import GradientTitle from '@/components/ui/gradientTitle';

const AdminHomePage = () => {
  return (
    <>
      <GradientTitle title="Admin Dashboard" />
      <div className="mt-6 space-y-3">
        <UserStats />
        <TeamStats />
        <EventStats />
      </div>
    </>
  );
};

export default AdminHomePage;
