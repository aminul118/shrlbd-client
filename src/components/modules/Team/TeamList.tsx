// TeamList.tsx (server component)
import TeamCard from "@/components/modules/Team/TeamMembersCard";
import getTeams, { ITeamMember } from "@/lib/data/getTeam";

const TeamList = async () => {
  const data = await getTeams();

  return (
    <>
      {data?.data?.map((member: ITeamMember) => (
        <TeamCard key={member._id} member={member} />
      ))}
    </>
  );
};

export default TeamList;
