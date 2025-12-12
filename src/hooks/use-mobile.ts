import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Set initial value
    setIsMobile(mql.matches);

    mql.addEventListener('change', onChange);

    return () => mql.removeEventListener('change', onChange);
  }, []);

  return isMobile;
};

export default useIsMobile;
