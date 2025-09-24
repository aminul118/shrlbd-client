import images from '@/config/images';
import Image from 'next/image';

const LoadingSpinner = () => {
  return (
    <div className="grid min-h-96 place-items-center">
      <Image
        src={images.gif.spinner}
        width={100}
        height={100}
        alt="Loading spinner"
      />
    </div>
  );
};

export default LoadingSpinner;
