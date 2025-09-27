/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import DateFormat from '@/components/common/DateFormat';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import FilteredViews from '@/components/common/filtering/FilteredViews';
import TableSkeleton from '@/components/common/loader/TableSkeleton';
import AppPagination from '@/components/common/pagination/AppPagination';
import GoToPage from '@/components/common/pagination/GoToPage';
import PageLimit from '@/components/common/pagination/PageLimit';
import PaginationStatus from '@/components/common/pagination/PaginationStatus';
import AppSearching from '@/components/common/searching/AppSearching';
import { Button } from '@/components/ui/button';
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
import Link from 'next/link';
import { useState } from 'react';
import DeleteTeamMember from './DeleteTeamMember';
import ViewTeamMemberModal from './ViewTeamMemberModal';

const TeamMembersTable = ({ props }: { props: Record<string, any> }) => {
  const params = {
    ...props,
  };

  const { data, isLoading, isFetching } = useGetAllTeamMembersQuery(params);

  const [columns, setColumns] = useState<Record<string, boolean>>({
    photo: true,
    name: true,
    designation: true,
    phone: true,
    createdAt: true,
    actions: true,
  });

  if (isLoading || isFetching) {
    return <TableSkeleton />;
  }

  if (isLoading || isFetching) {
    return <TableSkeleton />;
  }

  const members: ITeamMember[] = data?.data ?? [];
  const meta = data?.meta;

  return (
    <Container className="overflow-x-auto">
      {/* 🔹 Header + Filters */}
      <div className="mb-4 flex items-center justify-between">
        <GradientTitle title="Team Members" />
      </div>
      <div className="pb-8">
        <div className="flex items-center justify-between gap-2">
          <AppSearching />
          <div className="flex items-center justify-between gap-2">
            <PageLimit pageNumbers={[10, 20, 30, 40]} />
            <FilteredViews
              defaultColumns={columns}
              onChange={(updated) => setColumns(updated)}
            />
            <ClearAllFilter />
            <Button asChild>
              <Link href="/admin/add-team-member">Add Team Member</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 🔹 Table */}
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead>SI</TableHead>
            {columns.photo && <TableHead className="w-[72px]">Photo</TableHead>}
            {columns.name && <TableHead>Name</TableHead>}
            {columns.designation && <TableHead>Designation</TableHead>}
            {columns.phone && <TableHead>Phone</TableHead>}
            {columns.createdAt && <TableHead>Date & Time</TableHead>}
            {columns.actions && <TableHead>Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-gray-500">
                No team members found.
              </TableCell>
            </TableRow>
          ) : (
            <>
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
                    {columns.designation && (
                      <TableCell>{shrlDesignation}</TableCell>
                    )}
                    {columns.phone && <TableCell>{phone}</TableCell>}
                    {columns.createdAt && (
                      <TableCell>
                        <DateFormat date={createdAt} />
                      </TableCell>
                    )}
                    {columns.actions && (
                      <TableCell className="flex items-center justify-center gap-2">
                        <DeleteTeamMember id={'dummy'} />
                        <ViewTeamMemberModal member={member} />
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </>
          )}
        </TableBody>
      </Table>

      {/* 🔹 Pagination */}
      {meta && (
        <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <GoToPage totalPage={meta.totalPage} />
          <div className="flex items-center gap-4">
            <PaginationStatus meta={meta} />
            <AppPagination className="justify-end" meta={meta} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default TeamMembersTable;
