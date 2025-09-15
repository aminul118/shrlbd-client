import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { SectionProps } from '@/types';
import ContactForm from './ContactForm';

const Contact = ({ ...props }: SectionProps) => {
  return (
    <Container {...props} className="max-w-3xl space-y-12">
      <SectionHeading
        title="Get in Touch"
        description="For any inquiries, please fill out the form below and a member of our team will get back to you shortly."
      />
      <ContactForm />
    </Container>
  );
};

export default Contact;
