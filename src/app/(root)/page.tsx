import Contact from "@/components/common/Contact/Contact";
import KeyServices from "@/components/common/KeyServices/KeyServices";
import Commitment from "@/components/Home/Commitment";
import Faq from "@/components/Home/Faq";
import FoundingTeam from "@/components/Home/FoundingTeam";
import HeroBanner from "@/components/Home/HeroBanner";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";
import { Metadata } from "next";

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title:
    "Smart Healthcare and Research Ltd. - Empowering Maternal & Child Health",
  description:
    "Smart Healthcare and Research Ltd. offers innovative healthcare solutions for women and children, including online consultations, research, professional training, and community outreach.",
  keywords:
    "Smart Healthcare, Maternal health, Child healthcare, Digital healthcare services, Diabetes in pregnancy, Healthcare research, Public health, Professional training healthcare, Women's health, Child health, SHRL Bangladesh, Healthcare innovation",
  image: "/seo/shrl-hero-ss.png",
  url: "https://www.shrlbd.com",
});
// --> SEO End

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <KeyServices />
      <FoundingTeam />
      <Commitment />
      <Faq />
      <Contact />
    </>
  );
};

export default HomePage;
