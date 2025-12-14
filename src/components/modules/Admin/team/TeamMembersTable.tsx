'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import DateFormat from '@/components/common/date-format';
import Container from '@/components/ui/Container';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ITeamMember } from '@/types';
import Image from 'next/image';
import TeamMemberActions from './TeamMemberActions';

const TeamMembersTable = ({ members }: { members: ITeamMember[] }) => {
  if (!members.length) {
    return (
      <Table>
        <TableBody>
          <TableRow>
            <TableCell colSpan={7} className="text-center text-gray-500">
              No team members found.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }

  return (
    <Container className="overflow-x-auto">
      {/* Header */}

      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead>SI</TableHead>
            <TableHead>Photo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members?.map((member, i) => {
            const { _id, createdAt, name, phone, photo, shrlDesignation } =
              member;
            return (
              <TableRow key={_id}>
                <TableCell>{i + 1}</TableCell>

                <TableCell>
                  {photo ? (
                    <Image
                      src={photo}
                      alt={name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-gray-200" />
                  )}
                </TableCell>

                <TableCell>{name}</TableCell>
                <TableCell>{shrlDesignation}</TableCell>
                <TableCell>{phone}</TableCell>

                <TableCell>
                  <DateFormat date={createdAt} />
                </TableCell>

                <TableCell>
                  <TeamMemberActions member={member} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};

export default TeamMembersTable;
