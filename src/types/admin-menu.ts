import { type LucideIcon } from 'lucide-react';

type SubMenu = {
  name: string;
  url: string;
};

type MenuItem = {
  name: string;
  url: string;
  icon: LucideIcon;
  subMenu?: SubMenu[];
};

export type MenuGroup = {
  title?: string;
  menu: MenuItem[];
};
