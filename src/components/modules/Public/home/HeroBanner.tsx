'use client';

import images from '@/config/images';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

const HeroBanner = () => {
  return (
    <section className="flex items-center justify-center bg-[#CCD8E6] py-12 md:py-24 2xl:h-screen">
      <div className="container mx-auto grid items-center gap-12 md:grid-cols-2">
        {/* Left: Text */}
        <div className="space-y-8 px-4">
          <h1 className="text-3xl font-semibold text-[#626C8E] md:text-5xl">
            <Typewriter
              words={['Welcome to']}
              cursor
              loop
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </h1>

          <h2 className="text-3xl font-bold text-black md:text-5xl">
            Smart Healthcare and Research Ltd.
          </h2>

          <p className="mt-4 text-black md:text-2xl">
            <em>
              <strong>U</strong>
            </em>
            ncountable&nbsp;
            <em>
              <strong>T</strong>
            </em>
            ender&nbsp;
            <em>
              <strong>L</strong>
            </em>
            oving&nbsp;
            <em>
              <strong>C</strong>
            </em>
            are
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full">
          <Image
            src={images.banner.heroBanner}
            width={800}
            height={600}
            alt="Smart Healthcare and Research Ltd."
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
