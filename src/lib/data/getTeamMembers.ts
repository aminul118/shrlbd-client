import config from "@/config";

const getTeamMembers = async () => {
  const res = await fetch(`${config.baseUrl}/members`);

  if (!res.ok) {
    throw new Error("Failed to fetch team members");
  }

  const data = await res.json();
  return data;
};

export default getTeamMembers;
