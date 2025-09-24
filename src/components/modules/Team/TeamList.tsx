/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import TeamLoadingPage from '@/app/(root)/team/loading';
import NotFound from '@/components/common/NotFound';
import AppPagination from '@/components/common/pagination/AppPagination';
import GoToPage from '@/components/common/pagination/GoToPage';
import PaginationStatus from '@/components/common/pagination/PaginationStatus';
import Container from '@/components/ui/Container';
import { useGetAllTeamMembersQuery } from '@/redux/features/team/team.api';
import TeamMembersCard from './TeamMembersCard';

const TeamList = ({ props }: { props: Record<string, any> }) => {
  const params = {
    ...props,
  };

  const { data, isLoading, isFetching } = useGetAllTeamMembersQuery(params);

  const members = data?.data;
  const meta = data?.meta;

  if (isLoading || isFetching) {
    return <TeamLoadingPage />;
  }

  return (
    <Container className="py-12">
      {members?.length === 0 ? (
        <>
          <NotFound title="Team Member Not Found" />
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 2xl:grid-cols-3">
            {members?.map((member) => (
              <TeamMembersCard key={member._id} member={member} />
            ))}
          </div>
        </>
      )}

      {meta && (
        <div className="flex items-center justify-center lg:justify-between">
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

export default TeamList;
