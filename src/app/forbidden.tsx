import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Forbidden = () => {
  return (
    <section className="height-adjust grid place-items-center text-center">
      <div className="space-y-6 rounded-lg border bg-none p-24 shadow-2xl">
        <h1 className="text-9xl font-extrabold text-red-500">403</h1>
        <div>
          <h2 className="mb-3 text-4xl font-semibold">Forbidden</h2>
          <p>You are not authorized to access this resource..</p>
        </div>
        <Button asChild>
          <Link href="/"> Go to Homepage</Link>
        </Button>
      </div>
    </section>
  );
};

export default Forbidden;
