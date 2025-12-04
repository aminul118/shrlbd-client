/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import TeamLoadingPage from '@/app/(root)/(team)/team/loading';
import NotFound from '@/components/common/error/NotFound';
import AppPagination from '@/components/common/pagination/AppPagination';
import GoToPage from '@/components/common/pagination/GoToPage';
import PaginationStatus from '@/components/common/pagination/PaginationStatus';
import Container from '@/components/ui/Container';
import useSearchParamsValues from '@/hooks/useSearchParamsValues';
import { useGetAllTeamMembersQuery } from '@/redux/features/team/team.api';
import { IMeta } from '@/types';

import TeamMemberCard from './TeamMemberCard';

const TeamMembers = () => {
  const { page, limit } = useSearchParamsValues('page', 'limit');

  const params = {
    sort: 'createdAt',
    page,
    limit,
  };

  const { data, isLoading, isFetching } = useGetAllTeamMembersQuery(params);
  const members = data?.data;
  const meta = data?.meta;

  if (isLoading || isFetching) return <TeamLoadingPage />;

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
              <TeamMemberCard key={member._id} {...member} />
            ))}
          </div>
        </>
      )}
      <TeamMembersPagination meta={meta} />
    </Container>
  );
};

// Single Member card

// Team Member pagination
const TeamMembersPagination = ({ meta }: { meta?: IMeta }) => {
  if (!meta) return null;
  return (
    <div>
      {meta && (
        <div className="flex items-center justify-center lg:justify-between">
          <GoToPage totalPage={meta.totalPage} />
          <div className="flex items-center gap-4">
            <PaginationStatus meta={meta} />
            <AppPagination className="justify-end" meta={meta} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMembers;
