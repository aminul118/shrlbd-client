import DateFormat from '@/components/common/date-format';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import HtmlContent from '@/components/ui/HtmlContent';
import { IModal, IUpcomingEvent } from '@/types';
import Image from 'next/image';

interface Props extends IModal {
  event: IUpcomingEvent;
}

const ViewUpcomingEventModal = ({ event, open, setOpen }: Props) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="scrollbar-thin max-h-[80vh] w-full overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="space-y-2">
          <Image
            src={event.photo}
            width={400}
            height={400}
            alt={event.title}
            className="w-full"
          />
          <div>
            Date: <DateFormat date={event.date} />
          </div>
          <div>
            Time: <span>{event.time}</span>
          </div>
          <div>
            Venue: <span>{event.venue}</span>
          </div>

          <HtmlContent content={event.details} className="mt-4" />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ViewUpcomingEventModal;
