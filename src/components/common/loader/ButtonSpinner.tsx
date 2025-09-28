import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const ButtonSpinner = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <Loader2 size={16} className="animate-spin" />
    </div>
  );
};

export default ButtonSpinner;
