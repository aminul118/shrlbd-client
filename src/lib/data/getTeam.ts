import envVars from '@/config/env.config';

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

// Get all team members (with revalidation every 1 hour)
const getTeams = async (): Promise<{ data: ITeamMember[] }> => {
  const res = await fetch(`${envVars.baseUrl}/team/get-all`, {
    next: { revalidate: 3600 }, // ✅ cache & revalidate every hour
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch teams: ${res.statusText}`);
  }

  return res.json();
};

// Get single team member by slug (revalidate every 1 hour)
export const getSingleTeamMember = async (slug: string): Promise<{ data: ITeamMember }> => {
  const res = await fetch(`${envVars.baseUrl}/team/${slug}`, {
    next: { revalidate: 3600 }, // ✅ revalidate after 1 hour
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch team member: ${res.statusText}`);
  }

  return res.json();
};

export default getTeams;
