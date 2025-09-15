import Footer from '@/components/layouts/Footer/Footer';
import Navbar2 from '@/components/layouts/Navbar/Navbar2';
import { IChildren } from '@/types';

const MainLayout = ({ children }: IChildren) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar2 />
      <main className="flex-grow mt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
