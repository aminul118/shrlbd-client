import Footer from '@/components/layouts/Footer/Footer';
import Navbar from '@/components/layouts/Navbar/Navbar';

import { IChildren } from '@/types';

const MainLayout = ({ children }: IChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mt-20 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
