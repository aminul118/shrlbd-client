import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Link from 'next/link';
import Logo from '../Logo';
import ModeToggle from './ModeToggle';

/* ---------- Types to make `href` never undefined on simple links ---------- */
type SimpleLink = {
  label: string;
  href: string;
  submenu?: false;
};

type DescItem = {
  href: string;
  label: string;
  description: string;
};

type IconItem = {
  href: string;
  label: string;
  icon: 'BookOpenIcon' | 'LifeBuoyIcon' | 'InfoIcon';
};

type SubmenuDesc = {
  label: string;
  submenu: true;
  type: 'description';
  items: DescItem[];
};

type SubmenuIcon = {
  label: string;
  submenu: true;
  type: 'icon';
  items: IconItem[];
};

type NavItem = SimpleLink | SubmenuDesc | SubmenuIcon;

/* ----------------------------- Data (typed) ------------------------------ */
const navigationLinks: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'team' },
  {
    label: 'Events',
    submenu: true,
    type: 'description',
    items: [
      {
        href: '/upcoming-events',
        label: 'Upcoming Events',
        description: 'Browse all Upcoming Events',
      },
      {
        href: '/events',
        label: 'Events',
        description: 'Browse all previous events',
      },
    ],
  },
  { href: '/ai', label: 'AI' },
];

/* ------------------------------ Component -------------------------------- */
export default function Navbar2() {
  return (
    <header className="sticky top-0 w-full z-50 bg-white dark:bg-black px-4 md:px-6 py-2 border-b">
      <div className="flex h-16 items-center justify-between gap-4 container mx-auto">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="group size-8 md:hidden" variant="ghost" size="icon">
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      {'submenu' in link && link.submenu ? (
                        <>
                          <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                            {link.label}
                          </div>
                          <ul>
                            {link.type === 'description' &&
                              link.items.map((item) => (
                                <li key={item.label}>
                                  <NavigationMenuLink asChild>
                                    <Link href={item.href} className="py-1.5 block">
                                      <div className="space-y-1">
                                        <div className="font-medium">{item.label}</div>
                                        <p className="text-muted-foreground line-clamp-2 text-xs">
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            {link.type === 'icon' &&
                              link.items.map((item) => (
                                <li key={item.label}>
                                  <NavigationMenuLink asChild>
                                    <Link href={item.href} className="py-1.5 block">
                                      <div className="flex items-center gap-2">
                                        {item.icon === 'BookOpenIcon' && (
                                          <BookOpenIcon
                                            size={16}
                                            className="text-foreground opacity-60"
                                            aria-hidden="true"
                                          />
                                        )}
                                        {item.icon === 'LifeBuoyIcon' && (
                                          <LifeBuoyIcon
                                            size={16}
                                            className="text-foreground opacity-60"
                                            aria-hidden="true"
                                          />
                                        )}
                                        {item.icon === 'InfoIcon' && (
                                          <InfoIcon
                                            size={16}
                                            className="text-foreground opacity-60"
                                            aria-hidden="true"
                                          />
                                        )}
                                        <span>{item.label}</span>
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                          </ul>
                        </>
                      ) : (
                        // simple link branch: href is guaranteed string
                        <NavigationMenuLink asChild>
                          <Link href={link.href} className="py-1.5 block">
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      )}

                      {index < navigationLinks.length - 1 &&
                        ((!('submenu' in link) && 'submenu' in navigationLinks[index + 1]) ||
                          ('submenu' in link &&
                            link.submenu &&
                            !('submenu' in navigationLinks[index + 1])) ||
                          ('submenu' in link &&
                            link.submenu &&
                            'submenu' in navigationLinks[index + 1] &&
                            (link as SubmenuDesc | SubmenuIcon).type !==
                              (navigationLinks[index + 1] as SubmenuDesc | SubmenuIcon).type)) && (
                          <div
                            role="separator"
                            aria-orientation="horizontal"
                            className="bg-border -mx-1 my-1 h-px w-full"
                          />
                        )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link href="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
          </div>

          {/* Desktop menu */}
          <div>
            <NavigationMenu viewport={false} className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {'submenu' in link && link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-muted-foreground hover:text-primary bg-transparent px-2 py-1.5 font-medium *:[svg]:-me-0.5 *:[svg]:size-3.5">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="data-[motion=from-end]:slide-in-from-right-16! data-[motion=from-start]:slide-in-from-left-16! data-[motion=to-end]:slide-out-to-right-16! data-[motion=to-start]:slide-out-to-left-16! z-50 p-1">
                          <ul className={cn(link.type === 'description' ? 'min-w-64' : 'min-w-48')}>
                            {link.type === 'description' &&
                              link.items.map((item) => (
                                <li key={item.label}>
                                  <NavigationMenuLink asChild>
                                    <Link href={item.href} className="py-1.5 block">
                                      <div className="space-y-1">
                                        <div className="font-medium">{item.label}</div>
                                        <p className="text-muted-foreground line-clamp-2 text-xs">
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            {link.type === 'icon' &&
                              link.items.map((item) => (
                                <li key={item.label}>
                                  <NavigationMenuLink asChild>
                                    <Link href={item.href} className="py-1.5 block">
                                      <div className="flex items-center gap-2">
                                        {item.icon === 'BookOpenIcon' && (
                                          <BookOpenIcon
                                            size={16}
                                            className="text-foreground opacity-60"
                                            aria-hidden="true"
                                          />
                                        )}
                                        {item.icon === 'LifeBuoyIcon' && (
                                          <LifeBuoyIcon
                                            size={16}
                                            className="text-foreground opacity-60"
                                            aria-hidden="true"
                                          />
                                        )}
                                        {item.icon === 'InfoIcon' && (
                                          <InfoIcon
                                            size={16}
                                            className="text-foreground opacity-60"
                                            aria-hidden="true"
                                          />
                                        )}
                                        <span>{item.label}</span>
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="text-sm">
            <Link href="/contact">Contact</Link>
          </Button>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
