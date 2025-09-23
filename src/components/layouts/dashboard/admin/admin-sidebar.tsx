import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { adminSidebarmenu } from '@/constants/menu-types';
import Link from 'next/link';
import Logo from '../../Logo';
import Menu from './Menu';
import NavUser from './nav-user';

const AdminSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SidebarHeader>
        <Link href="/">
          <Logo className="flex justify-center" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* Sidebar Menu */}
        <Menu menuData={adminSidebarmenu} />
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AdminSidebar;
