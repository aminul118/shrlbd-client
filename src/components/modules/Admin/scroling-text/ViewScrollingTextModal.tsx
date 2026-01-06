import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { IModal, IScrollingText } from '@/types';

interface Props extends IModal {
  text?: IScrollingText | null;
}

const ViewScrollingTextModal = ({ text, open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Scrolling Text</DialogTitle>
        </DialogHeader>

        {text ? (
          <DialogDescription className="space-y-2">
            {text.text}
          </DialogDescription>
        ) : (
          <DialogDescription className="text-muted-foreground">
            No text selected
          </DialogDescription>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ViewScrollingTextModal;
