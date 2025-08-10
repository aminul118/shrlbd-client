'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IChildren } from '@/types';

const AosProvider = ({ children }: IChildren) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return <>{children}</>;
};

export default AosProvider;
