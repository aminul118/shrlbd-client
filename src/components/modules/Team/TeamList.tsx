/* eslint-disable @typescript-eslint/no-explicit-any */
import AppPagination from '@/components/common/AppPagination';
import NotFound from '@/components/common/NotFound';
import api from '@/lib/api';
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

      {meta && <AppPagination meta={meta} />}
    </div>
  );
};

export default TeamList;
