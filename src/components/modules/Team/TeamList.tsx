/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '@/api';
import NotFound from '@/components/common/NotFound';
import AppPagination from '@/components/common/pagination/AppPagination';
import GoToPage from '@/components/common/pagination/GoToPage';
import PaginationStatus from '@/components/common/pagination/PaginationStatus';
import TeamMembersCard from './TeamMembersCard';

const TeamList = async ({ props }: { props: Record<string, any> }) => {
  const params = {
    ...props,
  };

  const { data, meta } = await api.team.getTeamMembers(params);

  if (!data || data.length === 0) {
    return <NotFound title="Team Members Not Found" />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 2xl:grid-cols-3">
        {data.map((member) => (
          <TeamMembersCard key={member._id} member={member} />
        ))}
      </div>

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

export default TeamList;
