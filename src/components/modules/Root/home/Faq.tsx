import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { faqData } from '@/constants/faq';
import Image from 'next/image';

const Faq = () => {
  return (
    <Container>
      <SectionHeading title="FAQ Section" />

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
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
              <AccordionTrigger className="text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default Faq;
