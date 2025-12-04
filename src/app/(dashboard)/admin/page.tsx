import EventStats from '@/components/modules/Admin/stats/EventStats';
import TeamStats from '@/components/modules/Admin/stats/TeamStats';
import UserStats from '@/components/modules/Admin/stats/UserStats';
import GradientTitle from '@/components/ui/gradientTitle';

const AdminHomePage = () => {
  return (
    <section className="mx-auto w-11/12">
      <GradientTitle title="Admin Dashboard" />
      <div className="mt-6 space-y-3">
        <UserStats />
        <TeamStats />
        <EventStats />
      </div>
    </section>
  );
};

export default AdminHomePage;
