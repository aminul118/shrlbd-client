import config from '@/config';

export interface ITeamMember {
  _id: string;
  name: string;
  photo: string;
  phone: string;
  email?: string;
  designation?: string[];
  shrlDesignation: string;
  slug: string;
  content: string;
}

// Get all team members
const getTeams = async (): Promise<{ data: ITeamMember[] }> => {
  const res = await fetch(`${config.baseUrl}/team/get-all`, {
    cache: 'no-store', // ensures fresh data on every request
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch teams: ${res.statusText}`);
  }

  return res.json();
};

// Get single team member by slug
export const getSingleTeamMember = async (slug: string): Promise<{ data: ITeamMember }> => {
  const res = await fetch(`${config.baseUrl}/team/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch team member: ${res.statusText}`);
  }

  return res.json();
};

export default getTeams;
