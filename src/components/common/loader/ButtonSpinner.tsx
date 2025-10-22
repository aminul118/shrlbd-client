import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const ButtonSpinner = ({
  className,
  size = 16,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <Loader2 size={size} className="animate-spin" />
    </div>
  );
};

export default ButtonSpinner;
