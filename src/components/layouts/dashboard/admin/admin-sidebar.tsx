import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import { adminSidebarmenu } from '@/constants/admin-menu';
import Link from 'next/link';
import Logo from '../../Logo';
import Logout from './Logout';
import Menu from './Menu';

const AdminSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SidebarHeader>
        <Link href="/admin">
          <Logo className="flex justify-center" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* Sidebar Menu */}
        <Menu menuData={adminSidebarmenu} />
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter>
        <Logout />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AdminSidebar;
