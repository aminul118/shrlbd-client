import Footer from "@/components/layouts/Footer/Footer";
import ResponsiveNavbar from "@/components/layouts/Navbar/Navbar";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";
import { TChildren } from "@/lib/types/types";
import { Metadata } from "next";

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title:
    "Smart Healthcare and Research Ltd. - Empowering Maternal & Child Health",
  description:
    "Smart Healthcare and Research Ltd. offers innovative healthcare solutions for women and children, including online consultations, research, professional training, and community outreach.",
  keywords:
    "Smart Healthcare, SHRL, SHRLBD, Maternal health, Child healthcare, Digital healthcare services, Diabetes in pregnancy, Healthcare research, Public health, Professional training healthcare, Women's health, Child health, SHRL Bangladesh, Healthcare innovation",
  image: "/seo/shrl-hero-ss.png",
  url: "https://www.shrlbd.com",
});
// --> SEO End

const MainLayout = ({ children }: TChildren) => {
  return (
    <>
      <ResponsiveNavbar />
      <main className="min-h-[calc(100vh-351px)]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
