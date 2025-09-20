'use client';

import { type LucideIcon } from 'lucide-react';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

const SingleMenu = ({
  menuName,
  projects,
}: {
  menuName?: string;
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) => {
  return (
    <SidebarGroup className="py-0 group-data-[collapsible=icon]:hidden">
      {menuName && <SidebarGroupLabel>{menuName}</SidebarGroupLabel>}
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SingleMenu;
