import Footer from "@/components/layouts/Footer/Footer";
import ResponsiveNavbar from "@/components/layouts/Navbar/Navbar";
import { TChildren } from "@/lib/types/types";

const MainLayout = ({ children }: TChildren) => {
  return (
    <main>
      <ResponsiveNavbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
