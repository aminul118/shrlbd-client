'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import 'yet-another-react-lightbox/styles.css';

const EventImageSlider = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(-1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <>
      {/* Image Grid */}
      <div className="mt-14 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((photo: string, i: number) => (
          <div
            key={i}
            className="relative cursor-pointer overflow-hidden rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
            onClick={() => setIndex(i)} // 👉 open lightbox with clicked image
          >
            <Image
              src={photo}
              width={600}
              height={400}
              alt={`Photo ${i + 1}`}
              className="h-48 w-full object-cover xl:h-70"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        index={index}
        slides={images.map((image, i) => ({
          src: image,
          alt: `photo ${i + 1}`,
        }))}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Fullscreen]}
      />
    </>
  );
};

export default EventImageSlider;
