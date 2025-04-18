import Link from "next/link";
import { Facebook } from "lucide-react";
import Image from "next/image";
import Copyright from "./Copiright";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className=" flex flex-col lg:flex-row gap-8 justify-between">
          {/* Logo and Description */}
          <div>
            <Link href="/">
              <Image
                src="/logo-white.png"
                width={140}
                height={60}
                alt="Tab Statup logo png"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            <p className="text-lg font-semibold">Quick Links</p>
            <Link href="/services" className="text-gray-400 hover:text-white">
              Services
            </Link>
            <Link href="/team" className="text-gray-400 hover:text-white">
              Team
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            <p className="text-lg font-semibold">Important Links</p>

            <div className="flex space-x-4 mt-2 justify-center items-center">
              <Link
                target="_blank"
                aria-label="Facebook"
                href="https://www.facebook.com/smarthealthcareandresearchltd"
                className="text-gray-400 hover:text-white"
              >
                <Facebook />
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=co.logicaltriangle.mhealth"
                target="_blank"
                aria-label="BAN GDM app download link"
              >
                <Button variant="ghost" className="h-12  border-[1px]">
                  <IoLogoGooglePlaystore className="text-3xl" />
                  <div className="flex items-start flex-col">
                    <span className="text-xs text-white/75">BAN GDM</span>
                    <span>Google Play</span>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
