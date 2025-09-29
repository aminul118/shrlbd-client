'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import DateFormat from '@/components/common/date-format';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import TableSkeleton from '@/components/common/loader/TableSkeleton';
import AppPagination from '@/components/common/pagination/AppPagination';
import GoToPage from '@/components/common/pagination/GoToPage';
import PageLimit from '@/components/common/pagination/PageLimit';
import PaginationStatus from '@/components/common/pagination/PaginationStatus';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
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
import { useAllUsersInfoQuery } from '@/redux/features/auth/auth.api';
import { BadgeCheck, Trash } from 'lucide-react';
import NewUserModal from './NewUserModal';

const UsersTable = ({ props }: { props: Record<string, any> }) => {
  const params = {
    ...props,
  };
  const { data, isLoading } = useAllUsersInfoQuery(params);

  if (isLoading) {
    return <TableSkeleton />;
  }
  const users = data?.data;
  const meta = data?.meta;

  return (
    <Container>
      {/* 🔹 Header + Filters */}
      <div className="mb-4 flex items-center justify-between">
        <GradientTitle title="All Registered Users" />
      </div>
      <div className="pb-8">
        <div className="flex items-center justify-between gap-2">
          <AppSearching />
          <div className="flex items-center justify-between gap-2">
            <PageLimit pageNumbers={[10, 20, 30, 40]} />
            <Sorting
              sortOptions={[
                { name: 'Ascending', value: '-createdAt' },
                { name: 'Descending', value: 'createdAt' },
              ]}
            />
            <ClearAllFilter />
            <NewUserModal />
          </div>
        </div>
      </div>

      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead>SI</TableHead>
            <TableHead>Picture</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Verify</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user, index: number) => (
            <TableRow key={user._id} className="hover:bg-primary/10">
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.picture} alt={user.fullName} />
                  <AvatarFallback>
                    {user.fullName?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="font-medium">{user.role}</TableCell>
              <TableCell>
                {user.isVerified ? (
                  <Badge className="bg-green-800 text-white">
                    <BadgeCheck /> Verified
                  </Badge>
                ) : (
                  <Badge variant="secondary">Unverified</Badge>
                )}
              </TableCell>
              <TableCell>
                <DateFormat date={user.createdAt} />
              </TableCell>
              <TableCell className="text-center">
                <Button variant="destructive" size="icon">
                  <Trash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
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

export default UsersTable;
