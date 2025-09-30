'use client';

import DateFormat from '@/components/common/date-format';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import HtmlContent from '@/components/ui/HtmlContent';
import { ITeamMember } from '@/types';
import Image from 'next/image';

interface Props {
  member: ITeamMember;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const TeamMemberModal = ({ member, open, setOpen }: Props) => {
  const {
    name,
    email,
    phone,
    designation,
    shrlDesignation,
    content,
    createdAt,
    photo,
  } = member;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="scrollbar-thin max-h-[80vh] w-full overflow-y-auto sm:max-w-4xl">
        <DialogHeader>
          {name && (
            <DialogTitle>
              {name} | {shrlDesignation && shrlDesignation}
            </DialogTitle>
          )}
        </DialogHeader>

        <div className="space-y-2 text-sm">
          {createdAt && (
            <div className="text-xs">
              User Created: <DateFormat date={createdAt} />
            </div>
          )}

          {photo && (
            <div className="mt-4">
              <Image
                src={photo}
                alt={name}
                className="mt-2 h-32 w-32 rounded-md border object-cover"
                width={200}
                height={200}
              />
            </div>
          )}

          {email && (
            <div>
              <strong>Email:</strong> {email}
            </div>
          )}

          {phone && (
            <div>
              <strong>Phone:</strong> {phone}
            </div>
          )}

          {designation && (
            <div>
              <strong>Designation:</strong> {designation}
            </div>
          )}

          {content && <HtmlContent className="mt-4" content={content} />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberModal;
