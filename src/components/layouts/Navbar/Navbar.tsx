'use client';

import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import ModeToggle from './ModeToggle';

const ResponsiveNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const [desktopEventsOpen, setDesktopEventsOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileSidebarOpen ? 'hidden' : 'auto';
  }, [mobileSidebarOpen]);

  const closeMobileMenu = () => {
    setMobileSidebarOpen(false);
    setMobileEventsOpen(false);
  };

  return (
    <header className="flex items-center justify-between w-full sticky top-0 left-0 z-50 bg-white dark:bg-slate-800 shadow-md px-4 md:px-8">
      {/* Logo */}
      <div className="w-[45px] h-[40px] md:w-[70px] md:h-[70px]">
        <Link href="/" className="block w-full h-full relative">
          <Image
            src="/logo.png"
            alt="Smart Healthcare and Research Limited logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6 text-gray-700 dark:text-white text-lg">
        <li className="hover:text-blue-500 transition">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-blue-500 transition">
          <Link href="/services">Services</Link>
        </li>
        <li className="hover:text-blue-500 transition">
          <Link href="/team">Team</Link>
        </li>
        <li
          className="relative flex items-center gap-1 cursor-pointer hover:text-blue-500"
          onMouseEnter={() => setDesktopEventsOpen(true)}
          onMouseLeave={() => setDesktopEventsOpen(false)}
        >
          Events <MdKeyboardArrowDown />
          {desktopEventsOpen && (
            <div className="absolute top-full text-center bg-white dark:bg-slate-800 shadow-lg rounded-md p-5 w-56 z-50">
              <ul className="space-y-2 text-gray-700 dark:text-white">
                <li className="hover:text-blue-500 transition">
                  <Link href="/upcomming-events">Upcoming Events</Link>
                </li>
                <li className="hover:text-blue-500 transition">
                  <Link href="/events">Events</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="hover:text-blue-500 transition">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Theme change button */}
      <div className="hidden lg:block">
        <ModeToggle />
      </div>

      {/* Mobile Menu Toggle */}
      <Menu
        className="text-2xl text-gray-700 cursor-pointer md:hidden"
        onClick={() => setMobileSidebarOpen(true)}
      />

      {/* Overlay when mobile sidebar is open */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={closeMobileMenu} />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-slate-900 shadow-lg p-6 z-50 transform transition-transform duration-300 ${
          mobileSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 dark:text-white text-2xl"
          onClick={closeMobileMenu}
        >
          &times;
        </button>
        <ul className="mt-10 space-y-4 text-gray-700 dark:text-white">
          <li onClick={closeMobileMenu} className="hover:text-blue-500 transition">
            <Link href="/">Home</Link>
          </li>
          <li onClick={closeMobileMenu} className="hover:text-blue-500 transition">
            <Link href="/services">Services</Link>
          </li>
          <li onClick={closeMobileMenu} className="hover:text-blue-500 transition">
            <Link href="/team">Team</Link>
          </li>
          <li
            className="hover:text-blue-500 transition flex items-center justify-between"
            onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
          >
            Events
            <IoIosArrowDown
              className={`transition transform ${mobileEventsOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </li>
          {mobileEventsOpen && (
            <ul className="pl-4 space-y-2">
              <li onClick={closeMobileMenu} className="hover:text-blue-500 transition">
                <Link href="/upcomming-events">Upcoming Events</Link>
              </li>
              <li onClick={closeMobileMenu} className="hover:text-blue-500 transition">
                <Link href="/events">Events</Link>
              </li>
            </ul>
          )}
          <li onClick={closeMobileMenu} className="hover:text-blue-500 transition">
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default ResponsiveNavbar;
