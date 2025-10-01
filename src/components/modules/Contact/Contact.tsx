import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { SectionProps } from '@/types';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = ({ ...props }: SectionProps) => {
  return (
    <Container {...props} className="max-w-5xl space-y-12" data-aos="fade-up">
      <SectionHeading
        title="Get in Touch"
        description="For any inquiries, please fill out the form below and a member of our team will get back to you shortly."
      />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
