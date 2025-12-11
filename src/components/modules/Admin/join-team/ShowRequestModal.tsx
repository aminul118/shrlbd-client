'use client';

import DateFormat from '@/components/common/date-format';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { IModal } from '@/types';
import { ITeamJoinRequest } from '@/types/api.types';

interface Props extends IModal {
  request: ITeamJoinRequest;
}

export function ShowRequestModal({ request, setOpen, open }: Props) {
  const {
    name,
    email,
    phone,
    gender,
    occupation,
    field_of_interest,
    time_commitment,
    Why_join_team,
    createdAt,
  } = request;

  // Fields to display
  const fieldsToShow = {
    Name: name,
    Email: email,
    Phone: phone,
    Gender: gender,
    Occupation: occupation,
    'Field of Interest': field_of_interest,
    'Time Commitment': time_commitment,
    'Why Join Team': Why_join_team,
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="scrollbar-thin max-h-[80vh] w-full overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Request Details
          </DialogTitle>
          <DialogDescription>
            Review the request information submitted by {name} | Date -
            <DateFormat date={createdAt} />
          </DialogDescription>
        </DialogHeader>
        <div className="rounded-lg p-4">
          <dl className="grid grid-cols-1 gap-y-4">
            {Object.entries(fieldsToShow).map(([key, value]) => (
              <div key={key} className="border-t pt-3">
                <dt className="text-muted-foreground text-sm font-medium">
                  {key}
                </dt>
                <dd className="text-foreground mt-1 text-sm">
                  {String(value) || '-'}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </DialogContent>
    </Dialog>
  );
}
