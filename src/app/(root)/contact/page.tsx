import Contact from '@/components/modules/Contact/Contact';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const ContactPage = () => {
  return <Contact data-aos="fade-up" />;
};

export default ContactPage;

// --> SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Contact | SHRL',
  description:
    "Get in touch with Smart Healthcare and Research Ltd. (SHRL) for expert consultation, healthcare partnerships, training inquiries, or research collaboration. We're here to support maternal and child health initiatives through innovative digital solutions.",
  keywords:
    'Smart Healthcare contact, SHRL contact, healthcare consultation Bangladesh, maternal health contact, child healthcare support, healthcare training Bangladesh, public health research contact, digital health services Bangladesh, partner with SHRL, SHRL Bangladesh location, SHRL email, SHRL phone number',
  image: '/seo/shrl-hero-ss.png',
  websitePath: 'contact',
});
// --> SEO End
