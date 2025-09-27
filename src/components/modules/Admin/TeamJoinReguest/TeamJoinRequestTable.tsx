/* eslint-disable @typescript-eslint/no-explicit-any */
import DateFormat from '@/components/common/DateFormat';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import AppPagination from '@/components/common/pagination/AppPagination';
import GoToPage from '@/components/common/pagination/GoToPage';
import PageLimit from '@/components/common/pagination/PageLimit';
import PaginationStatus from '@/components/common/pagination/PaginationStatus';
import AppSearching from '@/components/common/searching/AppSearching';
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
import { getAllTeamJoinRequest } from '@/services/team';
import { ShowRequestModal } from './ShowRequestModal';

const TeamJoinRequest = async ({ props }: { props: Record<string, any> }) => {
  const params = {
    ...props,
  };

  const { data: requests, meta } = await getAllTeamJoinRequest(params);
  console.log(meta);

  return (
    <Container>
      <div>
        <div className="flex justify-start">
          <GradientTitle title="Team Join Requests" />
        </div>
        <div className="pb-8">
          <div className="flex items-center justify-end gap-2">
            <AppSearching />
            <PageLimit pageNumbers={[10, 20, 30, 40]} />
            <ClearAllFilter />
          </div>
        </div>
      </div>

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
          {requests?.map((req, i: number) => (
            <TableRow key={req._id}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{req.name}</TableCell>
              <TableCell>{req.email}</TableCell>
              <TableCell>{req.phone}</TableCell>
              <TableCell>{req.occupation}</TableCell>
              <TableCell>{<DateFormat date={req.createdAt} />}</TableCell>
              {/* Table Actions */}
              <TableCell className="flex items-center gap-2">
                <ShowRequestModal payload={req} />
                {/* <TeamJoinSendMessage email={req.email} /> */}
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

export default TeamJoinRequest;
