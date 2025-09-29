import DateFormat from '@/components/common/date-format';
import Tooltip from '@/components/common/Tooltip';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import HtmlContent from '@/components/ui/HtmlContent';
import { IEvent } from '@/types';
import { Eye } from 'lucide-react';
import Image from 'next/image';

const ShowPreviousEventModal = ({ event }: { event: IEvent }) => {
  const { content, createdAt, photos, title } = event;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Tooltip content="View Details">
            <Eye />
          </Tooltip>
        </Button>
      </DialogTrigger>

      <DialogContent
        aria-describedby={undefined}
        className="scrollbar-thin max-h-[80vh] w-full overflow-y-auto sm:max-w-3xl"
      >
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
        </DialogHeader>

        <div className="space-y-2 text-sm">
          {/* Date */}
          {createdAt && (
            <div className="text-xs">
              User Created: <DateFormat date={createdAt} />
            </div>
          )}

          {/* Content */}
          {content && <HtmlContent className="mt-4" content={content} />}

          <div className="mt-6 grid grid-cols-2 gap-4">
            {photos &&
              photos.map((photo) => (
                <Image
                  key={photo}
                  src={photo}
                  width={300}
                  height={300}
                  alt={title}
                  className="h-64 w-96 object-cover"
                />
              ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShowPreviousEventModal;
