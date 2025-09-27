'use client';
import DateFormat from '@/components/common/DateFormat';
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
import { useGetAiTrainingsQuery } from '@/redux/features/ai/ai.api';
import AddAiTrainingsModal from './AddAiTrainingsModal';
import ShowTrainingsModal from './ShowTrainingsModal';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AiTrainingsTable = ({ props }: { props: Record<string, any> }) => {
  const params = {
    ...props,
  };

  const { data, isLoading, isFetching } = useGetAiTrainingsQuery(params);
  const ai = data?.data;
  const meta = data?.meta;

  if (isFetching || isLoading) {
    return <TableSkeleton />;
  }

  return (
    <Container>
      {/* 🔹 Header + Filters */}
      <div className="mb-4 flex items-center justify-between">
        <GradientTitle title="AI Trainings" />
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
            <AddAiTrainingsModal />
          </div>
        </div>
      </div>

      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead>SI</TableHead>
            <TableHead>Question</TableHead>
            <TableHead>Answer</TableHead>
            <TableHead>Training Date & Time</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ai?.length === 0 ? (
            <>
              <TableRow>
                <TableCell colSpan={4} className="py-6 text-center">
                  No Data Found
                </TableCell>
              </TableRow>
            </>
          ) : (
            <>
              {ai?.map((item, i: number) => (
                <TableRow key={item._id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{item.question}</TableCell>
                  <TableCell>{item.answer}</TableCell>
                  <TableCell>
                    <DateFormat date={item.createdAt} />
                  </TableCell>
                  <TableCell className="text-left">
                    <ShowTrainingsModal payload={item} />
                  </TableCell>
                </TableRow>
              ))}
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

export default AiTrainingsTable;
