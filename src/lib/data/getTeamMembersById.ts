import config from "@/config";

const getTeamMembersById = async (slug: string) => {
  if (!config.baseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }

  const res = await fetch(`${config.baseUrl}/team/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch team member details.");
  }

  const data = await res.json();
  return data;
};

export default getTeamMembersById;
