'use client';

import DateFormat from '@/components/common/DateFormat';
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
import { Separator } from '@/components/ui/separator';
import { IAiTraining } from '@/types';
import { Eye } from 'lucide-react';

const ShowTrainingsModal = ({ payload }: { payload: IAiTraining }) => {
  const { question, answer, createdAt } = payload;

  return (
    <Dialog>
      {/* Trigger Button */}
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Tooltip content="View Details">
            <Eye />
          </Tooltip>
        </Button>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent
        aria-describedby={undefined} // prevent auto-description linking
        className="scrollbar-thin max-h-[80vh] w-full overflow-y-auto sm:max-w-xl"
      >
        <DialogHeader>
          <DialogTitle>AI Trainings Data</DialogTitle>
        </DialogHeader>

        {/* ✅ Use asChild to avoid <p> wrapping <div> */}
        <DialogDescription asChild>
          <div className="space-y-3 text-sm">
            {/* Date */}

            <div className="text-muted-foreground mb-12 text-xs">
              <DateFormat date={createdAt} />
            </div>

            {/* Question */}
            {question && (
              <div>
                <p className="mt-1 text-white/80">{question}</p>
              </div>
            )}

            {/* Answer */}
            <Separator />
            {answer && (
              <div>
                <p className="mt-1 text-sm">{answer}</p>
              </div>
            )}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default ShowTrainingsModal;
