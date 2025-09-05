import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionHeading from '../../ui/SectionHeading';
import Container from '../../ui/Container';

// FAQ Data
const faqData = [
  {
    question: 'Why join the SHRL?',
    answer: (
      <>
        <p>
          Scopes for medical professionals: SHRL provides a unique opportunity for networking and
          developing evidence-based knowledge and skills with proper tools. Check out{' '}
          <Link href="/services" className="text-blue-600 underline font-semibold">
            Our Key Services
          </Link>{' '}
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
          <Link href="/join-team" className="underline text-blue-600 font-semibold">
            Join Team
          </Link>
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
        Check out{' '}
        <Link href="/services" className="underline text-blue-600 font-semibold">
          Our Key Services
        </Link>
      </p>
    ),
  },
  {
    question: 'Does SHRL have any certified training?',
    answer: (
      <p>
        Check{' '}
        <Link href="/events" className="underline text-blue-600 font-semibold">
          Events
        </Link>{' '}
        to learn about our upcoming training events.
      </p>
    ),
  },
  {
    question: 'Do medical graduates and non-medical postgraduates have scopes to join SHRL?',
    answer: (
      <p>
        Yes. To join, fill out the{' '}
        <Link href="/join-team" className="underline text-blue-600 font-semibold">
          Form
        </Link>{' '}
        and we’ll get back to you.
      </p>
    ),
  },
];

const Faq = () => {
  return (
    <Container>
      <SectionHeading title="FAQ Section" />

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left Image */}
        <div>
          <Image
            src="/images/banner/faq.png"
            alt="FAQ"
            width={600}
            height={400}
            className="mx-auto"
          />
        </div>

        {/* Right Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default Faq;
