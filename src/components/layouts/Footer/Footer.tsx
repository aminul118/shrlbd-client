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
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Join Our Team', href: '/join-our-team' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'AI', href: '/ai' },
      { name: 'Upcoming Events', href: '/upcoming-events' },
      { name: 'Events', href: '/events' },
      { name: 'Blogs', href: '/blogs' },
    ],
  },
];

const socialLinks = [
  {
    icon: (
      <FaFacebook className="size-5 text-white transition hover:text-blue-400" />
    ),
    href: 'https://www.facebook.com/smarthealthcareandresearchltd',
    label: 'Facebook',
  },
];

const legalLinks = [
  { name: 'Terms and Conditions', href: '/terms-conditions' },
  { name: 'Return Refund Policy', href: '/return-refund-policy' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

const Footer = ({ description = 'Empowering Maternal & Child Health.' }) => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 pt-12">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Logo />
            </div>

            <p className="max-w-[70%] text-sm text-gray-300">{description}</p>

            {/* Social & Playstore */}
            <ul className="flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx}>
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
                <Link
                  href="https://play.google.com/store/apps/details?id=co.logicaltriangle.mhealth"
                  target="_blank"
                  aria-label="BAN GDM app download link"
                >
                  <Button
                    variant="ghost"
                    className="dark h-12 border text-white transition hover:bg-white"
                  >
                    <IoLogoGooglePlaystore className="text-white" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-semibold">BAN GDM</span>
                      <span className="text-xs">Google Play</span>
                    </div>
                  </Button>
                </Link>
              </div>
            </ul>
          </div>

          {/* Footer Sections */}
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="transition hover:text-blue-400"
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <FooterCopyright />
      </div>
    </footer>
  );
};

const FooterCopyright = () => {
  return (
    <div className="mt-8 flex flex-col justify-between gap-4 border-t border-gray-700 py-8 text-xs font-medium text-gray-400 md:flex-row md:items-center">
      <p className="order-2 lg:order-1">
        &copy; {new Date().getFullYear()} Smart Healthcare and Research Ltd. All
        rights reserved. Developed by{' '}
        <Link
          href="https://www.aminuldev.site"
          target="_blank"
          referrerPolicy="no-referrer"
          className="font-semibold text-blue-400 hover:text-blue-300"
        >
          Aminul Islam
        </Link>
      </p>

      <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
        {legalLinks.map((link, idx) => (
          <li key={idx} className="transition hover:text-blue-400">
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
