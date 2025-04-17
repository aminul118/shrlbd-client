import Contact from "@/components/common/Contact/Contact";
import KeyServices from "@/components/common/KeyServices/KeyServices";
import Commitment from "@/components/Home/Commitment";
import Faq from "@/components/Home/Faq";
import FoundingTeam from "@/components/Home/FoundingTeam";
import HeroBanner from "@/components/Home/HeroBanner";

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
