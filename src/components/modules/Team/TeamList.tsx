// TeamList.tsx (server component)
import TeamCard from '@/components/modules/Team/TeamMembersCard';
import getTeams, { ITeamMember } from '@/lib/data/getTeam';

const TeamList = async () => {
  const data = await getTeams();

  return (
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 2xl:grid-cols-3">
      {data?.data?.map((member: ITeamMember) => (
        <TeamCard key={member._id} member={member} />
      ))}
    </div>
  );
};

export default TeamList;
