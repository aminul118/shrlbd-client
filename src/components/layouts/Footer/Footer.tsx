'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import Logo from '../Logo';
import ModeToggle from '../ModeToggle';

const sections = [
  {
    title: 'Quick Links',
    links: [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: 'Services',
        href: '/services',
      },

      {
        name: 'Contact',
        href: '/contact',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        name: 'About',
        href: '/about',
      },
      {
        name: 'Team',
        href: '/team',
      },

      {
        name: 'Careers',
        href: '/careers',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        name: 'AI',
        href: '/ai',
      },
      {
        name: 'Upcoming Events',
        href: '/upcoming-events',
      },
      {
        name: 'Events',
        href: '/events',
      },
    ],
  },
];

const socialLinks = [
  {
    icon: <FaFacebook className="size-5" />,
    href: 'https://www.facebook.com/smarthealthcareandresearchltd',
    label: 'Facebook',
  },
];

const legalLinks = [
  {
    name: 'Terms and Conditions',
    href: '/terms-conditions',
  },
  {
    name: 'Return Refund Policy',
    href: '/return-refund-policy',
  },
  {
    name: 'Privacy Policy',
    href: '/privacy-policy',
  },
];

const Footer = ({ description = 'Empowering Maternal & Child Health.' }) => {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 pt-12">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <Logo />
            </div>
            <p className="text-muted-foreground max-w-[70%] text-sm">
              {description}
            </p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary font-medium">
                  <Link
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                  >
                    {social.icon}
                  </Link>
                </li>
              ))}
              <div className="mt-2 flex items-center space-x-4">
                {/* BAN GDM APP download  */}
                <Link
                  href="https://play.google.com/store/apps/details?id=co.logicaltriangle.mhealth"
                  target="_blank"
                  aria-label="BAN GDM app download link"
                >
                  <Button variant="ghost" className="h-12 border-[1px]">
                    <IoLogoGooglePlaystore />
                    <div className="flex flex-col items-start">
                      <span className="text-xs">BAN GDM</span>
                      <span className="text-xs">Google Play</span>
                    </div>
                  </Button>
                </Link>
              </div>
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">
            &copy; {new Date().getFullYear()} Smart Healthcare and Research Ltd
            . All rights reserved.
          </p>

          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <Link href={link.href}> {link.name}</Link>
              </li>
            ))}
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
