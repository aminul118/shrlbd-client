import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import services from "@/lib/constant/services";
import Image from "next/image";
import React from "react";

const KeyServices = () => {
  return (
    <div className="relative bg-[url('/images/banner/bg1.png')]  dark:bg-none bg-cover bg-center bg-no-repeat py-24">
      {/* White bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white pointer-events-none z-10 dark:hidden" />

      <Container className="relative z-20 space-y-8">
        <div>
          <SectionHeading
            title="Our Key Services"
            description="At Smart Healthcare and Research Ltd., we offer a comprehensive range of services designed to strengthen healthcare for women and children. Our approach combines advanced technology, evidence-based practices, and a deep commitment to patient care."
          />
        </div>

        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
          {services.map((service) => {
            const { id, photo, service_name, description, features } = service;

            return (
              <Card
                data-aos="fade-up"
                className="bg-gradient-to-b from-cyan-50 to-blue-200 dark:from-slate-950 dark:to-slate-900 rounded-xl p-2 md:p-8 space-y-3 shadow-xl h-full"
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
                    <p className="text-xl font-semibold mb-2">Features:</p>
                    <ul className="list-disc pl-5 space-y-1">
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
    </div>
  );
};

export default KeyServices;
