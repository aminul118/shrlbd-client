import ScrollingText from "@/components/UpcommingEvents/ScrollingText";
import TypeWritterHeading from "@/components/UpcommingEvents/TypeWritterHeading";
import UpcommingEvents from "@/components/UpcommingEvents/UpcommingEvents";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";
import { Metadata } from "next";

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: "Upcoming Events | Smart Healthcare and Research Ltd. (SHRL)",
  description:
    "Stay updated with the latest upcoming events organized by Smart Healthcare and Research Ltd. (SHRL), including workshops, seminars, and public health campaigns aimed at improving healthcare in Bangladesh.",
  keywords:
    "SHRL upcoming events, healthcare workshops Bangladesh, SHRL seminars, public health events, medical events Bangladesh, maternal health programs, child health awareness, SHRL community events, healthcare innovation events, SHRL training sessions, digital health campaigns",
  image: "/seo/shrl-hero-ss.png",
  url: "https://www.shrlbd.com/upcomming-events",
});
// --> SEO End

const UpcommingEventPage = () => {
  return (
    <>
      <TypeWritterHeading />
      <ScrollingText />
      <UpcommingEvents />
    </>
  );
};

export default UpcommingEventPage;
