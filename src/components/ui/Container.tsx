import { cn } from '@/lib/utils';
import { IChildren, SectionProps } from '@/types';

type TContainer = IChildren &
  SectionProps & {
    className?: string;
    background?: string;
  };

const Container = ({
  background,
  className,
  children,
  ...props
}: TContainer) => {
  return (
    <section {...props} className={cn('px-2 py-6 lg:py-8', background)}>
      <div className={cn('container mx-auto', className)}> {children}</div>
    </section>
  );
};

export default Container;
