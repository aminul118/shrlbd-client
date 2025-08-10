import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionHeading from '../../ui/SectionHeading';
import Container from '../../ui/Container';

const faqData = [
  {
    question: 'Why join the SHRL?',
    answer: (
      <>
        <p>
          Scopes for medical professionals: SHRL provides a unique opportunity for networking and
          developing evidence-based knowledge and skills with proper tools. Check out{' '}
          <strong className="text-blue-600 underline">
            <a href="./services.html">Our Key Services</a>
          </strong>{' '}
          to learn more.
        </p>
        <br />
        <p>
          Scopes for patients and aware citizens: You have the opportunity to empower yourself with
          knowledge to maintain maternal and child health in the most evidence-based approach.
        </p>
      </>
    ),
  },
  {
    question: 'How to join SHRL?',
    answer: (
      <>
        <p>Fill out the following form to join our team.</p>
        <p>
          <strong className="underline text-blue-600">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScRMCIkgGCYeqs_m6Ak6b67jIVFZ6GfVMEsNix2i9Mwgu3IOg/viewform">
              Google Form
            </a>
          </strong>
        </p>
        <br />
        <p>Your response form will be reviewed and we shall contact you for further procedures.</p>
      </>
    ),
  },
  {
    question: 'What services do we provide?',
    answer: (
      <p>
        Check out the{' '}
        <strong className="underline text-blue-600">
          <a href="./services.html">Our Key Services</a>
        </strong>
      </p>
    ),
  },
  {
    question: 'Does SHRL have any certified training?',
    answer: (
      <p>
        Check the segment of{' '}
        <strong className="underline text-blue-600">
          <a href="./events.html">Events</a>
        </strong>{' '}
        to learn about our upcoming training events.
      </p>
    ),
  },
  {
    question: 'Do medical graduates and non-medical postgraduates have scopes to join SHRL?',
    answer: (
      <p>
        Yes. To join, fill out the{' '}
        <strong className="underline text-blue-600">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScRMCIkgGCYeqs_m6Ak6b67jIVFZ6GfVMEsNix2i9Mwgu3IOg/viewform">
            Form
          </a>
        </strong>{' '}
        and we’ll get back to you.
      </p>
    ),
  },
];

const Faq = () => {
  return (
    <Container>
      <SectionHeading title="FAQ Section" />

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
        {/* Left */}
        <div className="my-8">
          <Image
            src="/images/banner/faq.png"
            alt="FAQ"
            width={600}
            height={400}
            className="mx-auto"
          />
        </div>

        {/* Right */}
        <div className="mt-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-xl font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="mt-2 text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Container>
  );
};

export default Faq;
