import { Card, CardContent } from '@/components/ui/card';
import { commitments } from '@/constants/commitments';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';

const Commitments = () => {
  return (
    <Container>
      <div className="mx-auto mb-8 flex flex-col items-center space-y-2 text-center xl:w-8/12">
        <SectionHeading
          title="Our Commitments"
          description="At Smart Healthcare and Research Ltd., we are not just healthcare providers—we are your dedicated partners in maternal and child health. Our focus on excellence, innovation, and compassion sets us apart in the healthcare sector. Here’s why you should trust us with your healthcare needs:"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        {commitments.map((commitment) => (
          <CommitmentCard key={commitment.id} {...commitment} />
        ))}
      </div>
    </Container>
  );
};

const CommitmentCard = ({ ...commitment }) => {
  const { id, icon: Icon, title, strengths } = commitment;
  return (
    <Card
      data-aos="fade-up"
      key={id}
      className="rounded-3xl bg-green-200 shadow-lg dark:bg-slate-900"
    >
      <CardContent className="flex flex-col items-center gap-4 p-6 md:flex-row">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <Icon className="text-5xl text-green-900 dark:text-green-400" />
        </div>
        <div>
          <p className="text-2xl font-semibold">{title}</p>
          <p className="mt-2 font-semibold">Key Strengths:</p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            {strengths.map((strength: string, i: number) => (
              <li key={i}>{strength}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default Commitments;
