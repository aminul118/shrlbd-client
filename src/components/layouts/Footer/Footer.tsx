import Link from "next/link";
import { Facebook } from "lucide-react";
import Image from "next/image";
import Copyright from "./Copiright";

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
            <h3 className="text-lg font-semibold">Quick Links</h3>
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
            <h3 className="text-lg font-semibold">Important Links</h3>

            <div className="flex space-x-4 mt-2">
              <Link
                target="_blank"
                aria-label="Facebook"
                href="https://www.facebook.com/smarthealthcareandresearchltd"
                className="text-gray-400 hover:text-white"
              >
                <Facebook />
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
