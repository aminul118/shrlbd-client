import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="relative bg-[url('/images/banner/bg2.jpg')] bg-cover bg-center bg-no-repeat py-24 min-h-[calc(100vh-351px)] flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

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
