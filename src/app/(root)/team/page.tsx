/* eslint-disable @typescript-eslint/no-explicit-any */
import TeamMemberCard from "@/components/Team/TeamMemberCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import getTeamMembers from "@/lib/data/getTeamMembers";


const TeamPage = async () => {
  const members = await getTeamMembers();
  console.log(members);
  return (
    <Container>
      <SectionHeading title="Our Team members" />
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 mt-20  gap-14 ">
        {members.map((member: any) => {
          const { _id } = member;
          return <TeamMemberCard key={_id} member={member} />;
        })}
      </div>
    </Container>
  );
};

export default TeamPage;
