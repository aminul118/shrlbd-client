import { Card, CardContent } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import services from '@/constants/services';
import { SectionProps } from '@/types';
import Image from 'next/image';

const KeyServices = ({ ...props }: SectionProps) => {
  return (
    <section {...props}>
      {/* White bottom gradient overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-b from-transparent to-white dark:hidden" />

      <Container className="relative z-20 space-y-8">
        <div>
          <SectionHeading
            title="Our Key Services"
            description="At Smart Healthcare and Research Ltd., we offer a comprehensive range of services designed to strengthen healthcare for women and children. Our approach combines advanced technology, evidence-based practices, and a deep commitment to patient care."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {services.map((service) => {
            const { id, photo, service_name, description, features } = service;

            return (
              <Card
                data-aos="fade-up"
                className="h-full space-y-3 rounded-xl bg-gradient-to-b from-cyan-50 to-blue-200 p-2 shadow-xl md:p-8 dark:from-slate-950 dark:to-slate-900"
                key={id}
              >
                <CardContent className="space-y-3">
                  <Image
                    src={photo}
                    alt={`${service_name} photo`}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                  <h2 className="text-2xl font-bold">{service_name}</h2>
                  <p>{description}</p>

                  <div>
                    <p className="mb-2 text-xl font-semibold">Features:</p>
                    <ul className="list-disc space-y-1 pl-5">
                      {features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div>
          <SectionHeading description="At Smart Healthcare and Research Ltd., each of our services is designed with the goal of improving healthcare access, quality, and outcomes for women and children. We are committed to continuous innovation and compassionate care, ensuring that our clients receive the best possible support on their healthcare journey." />
        </div>
      </Container>
    </section>
  );
};

export default KeyServices;
