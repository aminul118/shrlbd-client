import AppSidebar from '@/components/layouts/dashboard/admin/app-sidebar';
import DashboardBreadcrumb from '@/components/layouts/dashboard/admin/DashboardBreadcrumb ';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { IChildren } from '@/types';

const AdminLayout = ({ children }: IChildren) => {
  return (
    <SidebarProvider>
      {/* This is Sidebar Menu  */}
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <DashboardBreadcrumb />
          </div>
        </header>
        <div className="container mx-auto px-2">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
