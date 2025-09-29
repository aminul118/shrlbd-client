'use client';

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
import { ITeamMember } from '@/types';
import { Eye } from 'lucide-react';
import Image from 'next/image';

interface Props {
  member: ITeamMember;
}

const ViewTeamMemberModal = ({ member }: Props) => {
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
          {name && (
            <DialogTitle>
              {name} | {shrlDesignation && shrlDesignation}
            </DialogTitle>
          )}
        </DialogHeader>

        <div className="space-y-2 text-sm">
          {/* Date */}
          {createdAt && (
            <div className="text-xs">
              User Created: <DateFormat date={createdAt} />
            </div>
          )}

          {/* Photo */}
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

          {/* Email */}
          {email && (
            <div>
              <strong>Email:</strong> {email}
            </div>
          )}

          {/* Phone */}
          {phone && (
            <div>
              <strong>Phone:</strong> {phone}
            </div>
          )}

          {/* Designation */}
          {designation && (
            <div>
              <strong>Designation:</strong> {designation}
            </div>
          )}

          {/* Content */}
          {content && <HtmlContent className="mt-4" content={content} />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewTeamMemberModal;
