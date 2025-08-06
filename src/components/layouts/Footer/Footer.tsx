import Link from "next/link";
import { Facebook } from "lucide-react";
import Image from "next/image";
import Copyright from "./Copiright";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const linkStyle = "text-gray-400 hover:text-white";
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
                alt="Smart Healthcare and Research Ltd footer logo"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <p className="text-lg font-semibold">Quick Links</p>
            <Link href="/about" className={linkStyle}>
              About
            </Link>
            <Link href="/services" className={linkStyle}>
              Services
            </Link>
            <Link href="/team" className={linkStyle}>
              Team
            </Link>
            <Link href="/contact" className={linkStyle}>
              Contact
            </Link>
          </div>
          {/* Important Links */}
          <div className="flex flex-col space-y-2">
            <p className="text-lg font-semibold">Important Links</p>
            <Link href="/privacy-policy" className={linkStyle}>
              Privacy Policy
            </Link>
            <Link href="/return-refund-policy" className={linkStyle}>
              Return Refund Policy
            </Link>
            <Link href="/terms-conditions" className={linkStyle}>
              Terms & Conditions
            </Link>

            <div className="flex space-x-4 mt-2  items-center">
              {/* Facebook link */}
              <Link
                target="_blank"
                aria-label="Facebook"
                href="https://www.facebook.com/smarthealthcareandresearchltd"
                className={linkStyle}
              >
                <Facebook />
              </Link>
              {/* BAN GDM APP download  */}
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
        {/* <Image
          src="/images/ssl/ssl_banner.png"
          alt="SSl Image for Smart Healthcare and Research Limited"
          height={400}
          width={600}
          className="mt-6 mx-auto rounded-2xl"
        /> */}
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
