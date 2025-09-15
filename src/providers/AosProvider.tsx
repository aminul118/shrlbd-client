'use client';

import { IChildren, SectionProps } from '@/types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AosProvider = ({ children, ...props }: IChildren & SectionProps) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section {...props} className="overflow-x-hidden">
      {children}
    </section>
  );
};

export default AosProvider;
