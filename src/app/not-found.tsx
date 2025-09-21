'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import images from '@/config/images';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NotFound = () => {
  const path = usePathname();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <Card className="w-full max-w-lg rounded-lg border p-10 shadow-2xl">
        {/* Next.js 15 Image Fix */}
        <Image
          src={images.notFound}
          alt="Error 404"
          width={0}
          height={0}
          sizes="100vw"
          className="mx-auto h-64 w-64"
        />
        <p>Route: {path}</p>
        <h2 className="text-4xl font-semibold">Page Not Found</h2>
        <p>Sorry, we couldn’t find the page you’re looking for.</p>

        <Link href="/">
          <Button variant="destructive">Return to Home</Button>
        </Link>
      </Card>
    </div>
  );
};

export default NotFound;
