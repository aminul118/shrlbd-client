"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const HeroBanner = () => {
  return (
    <section className="bg-[#CCD8E6] py-12 md:py-24 2xl:h-screen flex justify-center items-center">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left: Text */}
        <div className="space-y-8 px-4">
          <h1 className="text-[#626C8E] text-3xl md:text-5xl font-semibold">
            <Typewriter
              words={["Welcome to"]}
              cursor
              loop
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Smart Healthcare and Research Ltd.
          </h2>

          <p className="text-xl md:text-2xl mt-4 text-black">
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
            src="/images/banner/hero-img-shrl-2.png"
            width={800}
            height={600}
            alt="Smart Healthcare and Research Ltd."
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
