import { DivProps } from '@/types';
import Image from 'next/image';

const Logo = ({ ...props }: DivProps) => {
  return (
    <div {...props}>
      <Image
        src="/logo.png"
        alt="Smart Healthcare and Research Limited logo"
        width={70}
        height={70}
        className="object-contain"
      />
    </div>
  );
};

export default Logo;
