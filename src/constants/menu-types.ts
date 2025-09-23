import { MenuGroup } from '@/types';
import { Briefcase, Home, Layers, Package, Users } from 'lucide-react';

export const adminSidebarmenu: MenuGroup[] = [
  {
    title: 'Menu',
    menu: [
      {
        name: 'Dashboard',
        url: '/admin',
        icon: Home,
      },
      {
        name: 'Category',
        url: '#',
        icon: Layers, // stack/layers = categories
        subMenu: [
          { name: 'Add Category', url: '#' },
          { name: 'All Category', url: '#' },
        ],
      },
      {
        name: 'Team',
        url: '#',
        icon: Users, // people icon
        subMenu: [
          { name: 'Add Team Member', url: '#' },
          { name: 'All Team Members', url: '#' },
        ],
      },
      {
        name: 'Services',
        url: '#',
        icon: Briefcase, // services/business
      },
      {
        name: 'Products',
        url: '#',
        icon: Package, // box/package = products
        subMenu: [
          { name: 'Add Product', url: '#' },
          { name: 'All Products', url: '#' },
        ],
      },
    ],
  },
];
