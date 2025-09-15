import { cn } from '@/lib/utils';
import { DivProps } from '@/types';

type TSectionHeading = DivProps & {
  title?: string;
  description?: string;
  className?: string;
};

const SectionHeading = ({
  title,
  description,
  className,
  ...props
}: TSectionHeading) => {
  return (
    <div
      {...props}
      className={cn('mx-auto max-w-4xl space-y-3 text-center', className)}
    >
      <h1 className="text-3xl font-bold lg:text-5xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SectionHeading;
