'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import images from '@/config/images';
import { Undo } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="center text-center">
      <Card className="w-full max-w-lg rounded-lg border bg-none p-10 shadow-2xl">
        {/* Next.js 15 Image Fix */}
        <Image
          src={images.notFound}
          alt="Error 404"
          width={0}
          height={0}
          sizes="100vw"
          className="mx-auto h-64 w-64"
        />
        <h2 className="text-4xl font-semibold">Page Not Found</h2>
        <p>Sorry, we couldn’t find the page you’re looking for</p>
        <div className="flex items-center justify-center gap-3">
          <Button variant="outline" onClick={handleBack}>
            <Undo /> Back to previous page
          </Button>
          <Button asChild>
            <Link href="/"> Go to Homepage</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
