import { Separator } from '@/components/ui/separator';
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
        <Link href="/admin" className="py-4">
          <Logo
            LogoHeight={80}
            LogoWidth={80}
            className="flex justify-center"
          />
        </Link>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        {/* Sidebar Menu */}
        <Menu menuData={adminSidebarmenu} />
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter className="py-6">
        <Separator className="mb-2" />
        <Logout />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AdminSidebar;
