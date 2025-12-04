'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CareerCTA = () => {
  return (
    <section className="bg-blue-900 py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <h3 className="mb-4 text-3xl font-semibold md:text-4xl">
          Join Smart Healthcare and Research Limited
        </h3>
        <p className="mx-auto mb-6 max-w-2xl text-blue-100">
          We’re dedicated to advancing medical innovation and improving lives
          through research. If you’re passionate about healthcare and discovery,
          we’d love to hear from you. Share your resume, and we’ll reach out
          when a suitable opportunity arises.
        </p>
        <Button
          asChild
          variant="secondary"
          className="bg-white font-medium text-blue-900 hover:bg-blue-100"
        >
          <Link
            href="/join-our-team"
            aria-label="Join Smart Healthcare and Research Limited team"
          >
            Join Our Team
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CareerCTA;
