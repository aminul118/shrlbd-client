import ContactForm from '@/components/modules/Public/contact/ContactForm';
import ContactInfo from '@/components/modules/Public/contact/ContactInfo';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const ContactPage = () => {
  return (
    <>
      <Container className="max-w-5xl space-y-12" data-aos="fade-up">
        <SectionHeading
          title="Get in Touch"
          description="For any inquiries, please fill out the form below and a member of our team will get back to you shortly."
        />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </>
  );
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
