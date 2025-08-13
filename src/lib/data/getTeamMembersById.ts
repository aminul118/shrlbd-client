import config from '@/config';

const getTeamMembersById = async (slug: string) => {
  const res = await fetch(`${config.baseUrl}/team/${slug}`);

  if (!res.ok) {
    throw new Error('Failed to fetch team member details.');
  }

  const data = await res.json();
  return data;
};

export default getTeamMembersById;
