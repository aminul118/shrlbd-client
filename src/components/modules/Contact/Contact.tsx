import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="relative flex min-h-[calc(100vh-351px)] flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-24">
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-64 w-full bg-gradient-to-b from-white to-transparent dark:hidden" />

      <Container className="space-y-12">
        <SectionHeading
          title="Get in Touch"
          description="For any inquiries, please fill out the form below and a member of our team will get back to you shortly."
        />
        <ContactForm />
      </Container>
    </div>
  );
};

export default Contact;
