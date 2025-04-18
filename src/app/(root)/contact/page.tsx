import Contact from "@/components/common/Contact/Contact";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";
import { Metadata } from "next";

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: "Contact - SHRL",
  description:
    "Get in touch with Smart Healthcare and Research Ltd. (SHRL) for expert consultation, healthcare partnerships, training inquiries, or research collaboration. We're here to support maternal and child health initiatives through innovative digital solutions.",
  keywords:
    "Smart Healthcare contact, SHRL contact, healthcare consultation Bangladesh, maternal health contact, child healthcare support, healthcare training Bangladesh, public health research contact, digital health services Bangladesh, partner with SHRL, SHRL Bangladesh location, SHRL email, SHRL phone number",
  image: "/seo/shrl-hero-ss.png",
  url: "https://www.shrlbd.com/contact",
});
// --> SEO End

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
