import NotFound from '@/components/common/NotFound';
import api from '@/lib/api';
import TeamMembersCard from './TeamMembersCard';

const TeamList = async () => {
  const { data } = await api.team.getTeamMembers();

  if (!data || data.length === 0) {
    return <NotFound title="Team Members Not Found" />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 2xl:grid-cols-3">
        {data.map((member) => (
          <TeamMembersCard key={member._id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
