import KeyServices from "@/components/common/KeyServices/KeyServices";
import Commitments from "@/components/Home/Commitment";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = generateMetaTags({
  title: "Services - BAN-GDM Maternal & Child Healthcare",
  description:
    "BAN-GDM is Smart Healthcare and Research Ltd.’s flagship online consultation platform offering secure, expert care for diabetes in pregnancy and maternal & child health—all from home.",
  keywords:
    "BAN-GDM, online healthcare consultation, digital maternal care, diabetes in pregnancy support, SHRL healthcare platform, virtual doctor consultation, women's health online, child health consultation Bangladesh, secure telemedicine, healthcare accessibility",
  image: "/seo/shrl-hero-ss.png",
  url: "https://www.shrlbd.com/services",
});

const ServicePage = () => {
  return (
    <div>
      <KeyServices />
      <Commitments />
    </div>
  );
};

export default ServicePage;
