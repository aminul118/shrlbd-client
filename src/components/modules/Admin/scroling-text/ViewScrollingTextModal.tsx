import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { IModal, IScrollingText } from '@/types';

interface Props extends IModal {
  text: IScrollingText;
}

const ViewScrollingTextModal = ({ text, open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Scrolling Text</DialogTitle>
        </DialogHeader>
        <DialogDescription className="space-y-2">{text.text}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ViewScrollingTextModal;
