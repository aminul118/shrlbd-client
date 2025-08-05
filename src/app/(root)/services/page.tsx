import KeyServices from "@/components/modules/KeyServices/KeyServices";
import Commitments from "@/components/modules/Home/Commitment";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";
import { Metadata } from "next";
import React from "react";

// ---> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: "Services - BAN-GDM Maternal & Child Healthcare",
  description:
    "BAN-GDM is Smart Healthcare and Research Ltd.’s flagship online consultation platform offering secure, expert care for diabetes in pregnancy and maternal & child health—all from home.",
  keywords:
    "BAN-GDM, online healthcare consultation, digital maternal care, diabetes in pregnancy support, SHRL healthcare platform, virtual doctor consultation, women's health online, child health consultation Bangladesh, secure telemedicine, healthcare accessibility",
  image: "/seo/shrl-hero-ss.png",
  url: "https://www.shrlbd.com/services",
});
// ---> SEO End

const ServicePage = () => {
  return (
    <>
      <KeyServices />
      <Commitments />
    </>
  );
};

export default ServicePage;
