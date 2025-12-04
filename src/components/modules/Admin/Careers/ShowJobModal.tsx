'use client';

import DateFormat from '@/components/common/date-format';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import HtmlContent from '@/components/ui/HtmlContent';
import { IJob, IModal } from '@/types';

interface Props extends IModal {
  job: IJob;
}

const ShowJobModal = ({ job, open, setOpen }: Props) => {
  const { createdAt, department, details, location, title, short_description } =
    job;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
              Posted on: <DateFormat date={createdAt} />
            </div>
          )}

          <div>
            <strong>Department:</strong> {department}
          </div>

          <div>
            <strong>Location:</strong> {location}
          </div>

          <p className="mt-2 text-gray-600">{short_description}</p>

          <HtmlContent className="mt-4" content={details} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShowJobModal;
