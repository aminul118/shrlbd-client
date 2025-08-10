import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '../../ui/SectionHeading';
import commitments from '@/lib/constant/commitments';

import Container from '../../ui/Container';

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
        {commitments.map((commitment) => {
          const { id, icon: Icon, title, strengths } = commitment;
          return (
            <Card
              data-aos="fade-up"
              key={id}
              className="bg-green-200 rounded-3xl shadow-lg dark:bg-slate-900"
            >
              <CardContent className="flex flex-col md:flex-row items-center gap-4 p-6">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <Icon className="text-5xl text-green-900 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-2xl font-semibold">{title}</p>
                  <p className="mt-2 font-semibold">Key Strengths:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {strengths.map((strength, i) => (
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
