import Commitments from '@/components/modules/Public/home/Commitment';
import KeyServices from '@/components/modules/Public/key-services/KeyServices';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const ServicePage = () => {
  return (
    <>
      <KeyServices />
      <Commitments />
    </>
  );
};

export default ServicePage;

// ---> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Services - BAN-GDM Maternal & Child Healthcare',
  description:
    'BAN-GDM is Smart Healthcare and Research Ltd.’s flagship online consultation platform offering secure, expert care for diabetes in pregnancy and maternal & child health—all from home.',
  keywords:
    "BAN-GDM, online healthcare consultation, digital maternal care, diabetes in pregnancy support, SHRL healthcare platform, virtual doctor consultation, women's health online, child health consultation Bangladesh, secure telemedicine, healthcare accessibility",
  image: '/seo/shrl-hero-ss.png',
  websitePath: '/services',
});
// ---> SEO End
