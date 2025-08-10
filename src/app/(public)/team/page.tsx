import Container from "@/components/ui/Container";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";
import { Metadata } from "next";
import getTeams from "@/lib/data/getTeam";
import { Suspense } from "react";
import TeamMembersCardSkeleton from "@/components/modules/Team/TeamMembersCardSkeleton";
import TeamList from "@/components/modules/Team/TeamList";

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

const TeamMemberPage = async () => {
  const data = await getTeams();
  console.log(data);

  return (
    <Container className=" mt-20">
      <Suspense fallback={<TeamMembersCardSkeleton count={6} />}>
        <TeamList />
      </Suspense>
    </Container>
  );
};

export default TeamMemberPage;
