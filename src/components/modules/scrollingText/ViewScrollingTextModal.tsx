import Tooltip from '@/components/common/Tooltip';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { IScrollingText } from '@/types';
import { Eye } from 'lucide-react';

interface Props {
  text: IScrollingText;
}

const ViewScrollingTextModal = ({ text }: Props) => {
  const { text: fullText } = text;

  return (
    <Dialog>
      <Tooltip content="View Details">
        <DialogTrigger asChild>
          <Button variant="outline">
            <Eye />
          </Button>
        </DialogTrigger>
      </Tooltip>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Scrolling Text</DialogTitle>
        </DialogHeader>
        <DialogDescription className="space-y-2">{fullText}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ViewScrollingTextModal;
