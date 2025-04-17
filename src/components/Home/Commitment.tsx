import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import commitments from "@/lib/constant/commitments";
import { ICommitments } from "@/lib/types/types";
import Container from "../ui/Container";

const Commitments = () => {
  return (
    <Container>
      <div className="space-y-2 flex flex-col items-center text-center xl:w-8/12 mx-auto mb-8">
        <SectionHeading
          title="Our Commitments"
          description="At Smart Healthcare and Research Ltd., we are not just healthcare providers—we are your dedicated partners in maternal and child health. Our focus on excellence, innovation, and compassion sets us apart in the healthcare sector. Here’s why you should trust us with your healthcare needs:"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {commitments.map((commitment: ICommitments) => {
          const { id, icon, title } = commitment;
          return (
            <Card key={id} className="bg-green-200 rounded-3xl shadow-lg">
              <CardContent className="flex flex-col md:flex-row items-center gap-4 p-6">
                <div className="relative w-16 h-16">
                  <Image
                    src={icon}
                    alt={title}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-2 font-semibold">Key Strengths:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {commitment.strengths.map((strength, i) => (
                      <li key={i}>{strength}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Commitments;
