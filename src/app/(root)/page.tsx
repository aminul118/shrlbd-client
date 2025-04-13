import KeyServices from "@/components/common/KeyServices/KeyServices";
import HeroBanner from "@/components/Home/HeroBanner";

const HomePage = () => {
  return (
    <div className="space-y-8">
      <HeroBanner />
      <KeyServices />
    </div>
  );
};

export default HomePage;
