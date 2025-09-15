import Image from 'next/image';

const Logo = () => {
  return (
    <div>
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
