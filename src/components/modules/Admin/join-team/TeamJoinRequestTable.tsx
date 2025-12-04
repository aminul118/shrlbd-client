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
import { useTeamJoinRequestQuery } from '@/redux/features/joinTeam/joinTeam.api';
import { IMeta } from '@/types';
import { ITeamJoinRequest } from '@/types/apiData.types';
import JoinTeamActions from './JoinTeamActions';

const TeamJoinRequest = ({ props }: { props: Record<string, any> }) => {
  const params = {
    ...props,
  };

  const { data, isLoading } = useTeamJoinRequestQuery(params);
  const teams = data?.data || [];
  const meta = data?.meta;

  if (isLoading) {
    <TableSkeleton />;
  }
  return (
    <Container>
      <div>
        <div className="mb-4 flex justify-start">
          <GradientTitle title="Team Join Requests" />
        </div>
        <TeamJoinFilter />
      </div>
      {/* Main Content */}
      <TeamJoinTable teams={teams} />
      <TeamJoinPagination meta={meta} />
    </Container>
  );
};

// Team Join User request Table
const TeamJoinTable = ({ teams }: { teams: ITeamJoinRequest[] }) => {
  return (
    <>
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead>SI</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Occupation</TableHead>
            <TableHead>Request Date & Time</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams?.map((req, i: number) => (
            <TableRow key={req._id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{req.name}</TableCell>
              <TableCell>{req.email}</TableCell>
              <TableCell>{req.phone}</TableCell>
              <TableCell>{req.occupation}</TableCell>
              <TableCell>{<DateFormat date={req.createdAt} />}</TableCell>
              {/* Table Actions */}
              <TableCell>
                <JoinTeamActions team={req} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

// Team Join Filter

const TeamJoinFilter = () => {
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between gap-2">
        <AppSearching />
        <div className="flex items-center justify-center gap-2">
          <PageLimit pageNumbers={[10, 20, 30, 40]} />
          <Sorting
            sortOptions={[
              { name: 'Ascending', value: '-createdAt' },
              { name: 'Descending', value: 'createdAt' },
            ]}
          />
          <ClearAllFilter />
        </div>
      </div>
    </div>
  );
};

// Team Join Pagination

const TeamJoinPagination = ({ meta }: { meta?: IMeta }) => {
  if (!meta) return null;

  return (
    <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
      <GoToPage totalPage={meta.totalPage} />
      <div className="flex items-center gap-4">
        <PaginationStatus meta={meta} />
        <AppPagination className="justify-end" meta={meta} />
      </div>
    </div>
  );
};

export default TeamJoinRequest;
