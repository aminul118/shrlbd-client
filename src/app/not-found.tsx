'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import images from '@/config/images';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = ({
  title = 'Page Not Found',
  description = 'Sorry, we couldn’t find the page you’re looking for.',
}) => {
  return (
    <div className="center text-center">
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

        <h2 className="text-4xl font-semibold">{title}</h2>
        <p>{description}</p>

        <Link href="/">
          <Button variant="destructive">Return to Home</Button>
        </Link>
      </Card>
    </div>
  );
};

export default NotFound;
