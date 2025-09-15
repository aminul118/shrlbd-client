import Footer from '@/components/layouts/Footer/Footer';
import Navbar2 from '@/components/layouts/Navbar/Navbar2';
import { IChildren } from '@/types';

const MainLayout = ({ children }: IChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar2 />
      <main className="mt-20 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
