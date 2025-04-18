"use client";

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const ResponsiveNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mobileBankingOpen, setMobileBankingOpen] = useState(false);
  const [desktopBankingOpen, setDesktopBankingOpen] = useState(false);

  return (
    <header className="flex items-center justify-between w-full sticky top-0 left-0 z-50 bg-white dark:bg-slate-800  shadow-md px-4 md:px-8">
      {/* Logo */}
      <div className="relative w-[140px] h-[40px] md:w-[200px] md:h-[70px]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Smart healthcare and research limited logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6 text-gray-700 dark:text-white text-lg">
        <li className="hover:text-blue-500 transition cursor-pointer">
          <Link href="/">Home</Link>
        </li>

        <li className="hover:text-blue-500 transition cursor-pointer">
          <Link href="/services">Services</Link>
        </li>
        <li className="hover:text-blue-500 transition cursor-pointer">
          <Link href="/team">Team</Link>
        </li>
        <li
          className="relative flex items-center gap-1 cursor-pointer hover:text-blue-500"
          onMouseEnter={() => setDesktopBankingOpen(true)}
          onMouseLeave={() => setDesktopBankingOpen(false)}
        >
          Events <MdKeyboardArrowDown className="transition" />
          {desktopBankingOpen && (
            <div className="absolute top-full text-center bg-white dark:bg-slate-800 shadow-lg rounded-md p-5 w-56">
              <ul className="space-y-2 text-gray-700 dark:text-white ">
                <li className="hover:text-blue-500 transition">
                  <Link href="/upcomming-events">Upcomming Events</Link>
                </li>
                <li className="hover:text-blue-500 transition">
                  <Link href="/events">Events</Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="hover:text-blue-500 transition cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Theme change button */}
      <ModeToggle />

      {/* Mobile Menu Toggle */}
      <Menu
        className="text-2xl text-gray-700 cursor-pointer md:hidden"
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 transform transition-transform duration-300 ${
          mobileSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 text-2xl"
          onClick={() => setMobileSidebarOpen(false)}
        >
          &times;
        </button>
        <ul className="mt-10 space-y-4 text-gray-700">
          <li className="hover:text-blue-500 transition cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li
            className="hover:text-blue-500 transition cursor-pointer flex items-center gap-2"
            onClick={() => setMobileBankingOpen(!mobileBankingOpen)}
          >
            Banking
            <IoIosArrowDown
              className={`transition ${
                mobileBankingOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </li>
          {mobileBankingOpen && (
            <ul className="pl-6 space-y-2">
              <li className="hover:text-blue-500 transition">
                <Link href="/personal-banking">Personal</Link>
              </li>
              <li className="hover:text-blue-500 transition flex items-center gap-2">
                <Link href="/business-banking">Business</Link>
              </li>
              <li className="hover:text-blue-500 transition flex items-center gap-2">
                <Link href="/corporate-banking">Corporate</Link>
              </li>
            </ul>
          )}
          <li className="hover:text-blue-500 transition cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-blue-500 transition cursor-pointer">
            <Link href="/fintech">Fintact</Link>
          </li>
          <li className="hover:text-blue-500 transition cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:text-blue-500 transition cursor-pointer">
            <ModeToggle />
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default ResponsiveNavbar;
