import { MenuGroup } from '@/types';
import {
  Bot,
  CalendarDays,
  GalleryHorizontal,
  Gauge,
  Globe,
  UserCog,
  Users,
} from 'lucide-react';

export const adminSidebarmenu: MenuGroup[] = [
  {
    title: 'Menu',
    menu: [
      {
        name: 'Dashboard',
        url: '/admin',
        icon: Gauge,
      },
      {
        name: 'Events',
        url: '#',
        icon: CalendarDays,
        subMenu: [
          { name: 'Upcoming Events', url: '/admin/upcoming-events' },
          { name: 'Previous Event', url: '/admin/previous-events' },
        ],
      },
      {
        name: 'Team',
        url: '#',
        icon: UserCog,
        subMenu: [
          { name: 'Team Members', url: '/admin/team-members' },
          { name: 'Join Requests', url: '/admin/team-join-request' },
        ],
      },
      {
        name: 'Registered Users',
        url: '/admin/users',
        icon: Users,
      },
      {
        name: 'Scrolling Text',
        url: '/admin/scrolling-texts',
        icon: GalleryHorizontal,
      },
      {
        name: 'AI Trainings',
        url: '/admin/ai-trainings',
        icon: Bot,
      },
      {
        name: 'Website',
        url: '/',
        icon: Globe,
      },
    ],
  },
];
