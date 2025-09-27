'use client';

import DateFormat from '@/components/common/DateFormat';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ITeamJoinRequest } from '@/types/apiData.types';
import { Eye } from 'lucide-react';

export function ShowRequestModal({ payload }: { payload: ITeamJoinRequest }) {
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
  } = payload;

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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Eye />
        </Button>
      </DialogTrigger>

      <DialogContent className="scrollbar-thin max-h-[80vh] w-full overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Request Details
          </DialogTitle>
          <div className="text-xs">
            <DateFormat date={createdAt} />
          </div>
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
