import AppPagination from '@/components/common/AppPagination';
import NotFound from '@/components/common/NotFound';
import api from '@/lib/api';
import TeamMembersCard from './TeamMembersCard';

interface TeamListProps {
  searchParams?: {
    page?: string;
    search?: string;
    field?: string;
  };
}

const TeamList = async ({ searchParams }: TeamListProps) => {
  const page = Number(searchParams?.page || '1');
  const search = searchParams?.search || '';
  const limit = 9;

  const params = {
    params: {
      page,
      limit,
      search,
    },
  };

  const { data, meta } = await api.team.getTeamMembers(params);
  console.log(data, meta);

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

      {meta && <AppPagination meta={meta} className="py-12" />}
    </div>
  );
};

export default TeamList;
