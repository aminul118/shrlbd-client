/* eslint-disable @typescript-eslint/no-explicit-any */
import TeamMemberCard from "@/components/modules/Team/TeamMemberCard";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import getTeamMembers from "@/lib/data/getTeamMembers";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";
import { Metadata } from "next";

// ---> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: "Team Members - SHRL",
  description:
    "Meet the passionate and experienced team behind Smart Healthcare and Research Ltd. Our founding members are healthcare leaders, researchers, and public health experts dedicated to transforming maternal and child health in Bangladesh through innovation, research, and compassionate care.",
  keywords:
    "Smart Healthcare team, SHRL team members, healthcare professionals Bangladesh, maternal and child health experts, public health specialists, BAN-GDM team, SHRL founding members, healthcare leadership Bangladesh, women’s health experts, clinical researchers Bangladesh, SHRL board, digital health innovators, healthcare team Bangladesh, SHRL doctors and researchers",
  image: "/seo/shrl-hero-ss.png",
  url: "https://www.shrlbd.com/team",
});
// ---> SEO END

const TeamPage = async () => {
  const members = await getTeamMembers();

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
