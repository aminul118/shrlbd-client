import AppPagination from '@/components/common/AppPagination';
import NotFound from '@/components/common/NotFound';
import api from '@/lib/api';
import TeamMembersCard from './TeamMembersCard';

export type TeamListProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

const TeamList = async ({ searchParams }: TeamListProps) => {
  // Default values for SSG
  const pageParam = searchParams?.page || '1';
  const limitParam = searchParams?.limit || '4';

  console.log(searchParams);

  const params = {
    page: pageParam,
    limit: limitParam,
  };

  const { data, meta } = await api.team.getTeamMembers(
    params as Record<string, string>,
  );

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
      {meta && <AppPagination meta={meta} />}
    </div>
  );
};

export default TeamList;
