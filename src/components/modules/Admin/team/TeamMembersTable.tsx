'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import DateFormat from '@/components/common/date-format';
import TableSkeleton from '@/components/common/loader/TableSkeleton';
import TablePagination from '@/components/common/pagination/TablePagination';
import Container from '@/components/ui/Container';
import GradientTitle from '@/components/ui/gradientTitle';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetAllTeamMembersQuery } from '@/redux/features/team/team.api';
import { ITeamMember } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import TeamFilters from './TeamFilters';
import TeamMemberActions from './TeamMemberActions';

const TeamMembersTable = ({ props }: { props: Record<string, any> }) => {
  const params = { ...props };
  const { data, isLoading, isFetching } = useGetAllTeamMembersQuery(params);

  const [columns, setColumns] = useState<Record<string, boolean>>({
    photo: true,
    name: true,
    designation: true,
    phone: true,
    createdAt: true,
    actions: true,
  });

  if (isLoading || isFetching) return <TableSkeleton />;

  const members = data?.data ?? [];
  const meta = data?.meta;

  return (
    <Container className="overflow-x-auto">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <GradientTitle title="All Team Members" />
      </div>
      <TeamFilters columns={columns} setColumns={setColumns} />
      {/* Main Content */}
      <TableCreate members={members} columns={columns} />
      <TablePagination meta={meta} />
    </Container>
  );
};

// TABLE COMPONENT
const TableCreate = ({
  members,
  columns,
}: {
  members: ITeamMember[];
  columns: Record<string, boolean>;
}) => {
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
    <Table>
      <TableHeader className="bg-muted">
        <TableRow>
          <TableHead>SI</TableHead>
          {columns.photo && <TableHead>Photo</TableHead>}
          {columns.name && <TableHead>Name</TableHead>}
          {columns.designation && <TableHead>Designation</TableHead>}
          {columns.phone && <TableHead>Phone</TableHead>}
          {columns.createdAt && <TableHead>Date & Time</TableHead>}
          {columns.actions && <TableHead>Actions</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member, i) => {
          const { _id, createdAt, name, phone, photo, shrlDesignation } =
            member;
          return (
            <TableRow key={_id}>
              <TableCell>{i + 1}</TableCell>

              {columns.photo && (
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
              )}

              {columns.name && <TableCell>{name}</TableCell>}
              {columns.designation && <TableCell>{shrlDesignation}</TableCell>}
              {columns.phone && <TableCell>{phone}</TableCell>}
              {columns.createdAt && (
                <TableCell>
                  <DateFormat date={createdAt} />
                </TableCell>
              )}
              {columns.actions && (
                <TableCell>
                  <TeamMemberActions member={member} />
                </TableCell>
              )}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TeamMembersTable;
