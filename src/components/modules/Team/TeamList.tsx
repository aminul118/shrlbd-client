// TeamList.tsx (server component)
import TeamCard from '@/components/modules/Team/TeamMembersCard';
import api from '@/lib/api';

const TeamList = async () => {
  const { data } = await api.team.getTeamMembers();
  console.log(data);

  return (
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 2xl:grid-cols-3">
      {data?.map((member) => (
        <TeamCard key={member._id} member={member} />
      ))}
    </div>
  );
};

export default TeamList;
