'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AosProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      AOS.init({ duration: 1000, once: true });
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  return <>{children}</>;
};

export default AosProvider;
