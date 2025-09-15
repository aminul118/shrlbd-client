import { IChildren } from '@/types';

type TContainer = IChildren & {
  className?: string;
  background?: string;
};

const Container = ({ children, className, background }: TContainer) => {
  return (
    <section className={`${background} px-2 py-6 lg:py-8`}>
      <div className={`${className} container mx-auto`}> {children}</div>
    </section>
  );
};

export default Container;
