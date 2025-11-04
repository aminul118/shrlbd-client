import { Button } from '@/components/ui/button';

const CareerCTA = () => {
  return (
    <section className="bg-blue-900 py-16 text-center text-white">
      <h3 className="mb-4 text-3xl font-semibold">Didn’t find your role?</h3>
      <p className="mb-6 text-blue-100">
        We’re always looking for talented professionals. Send us your resume,
        and we’ll reach out when a matching role opens.
      </p>
      <Button
        variant="secondary"
        className="bg-white text-blue-900 hover:bg-blue-100"
      >
        Send Resume
      </Button>
    </section>
  );
};

export default CareerCTA;
