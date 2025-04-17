const getTeamMembersById = async (id: string) => {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/member/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch team member details.");
  }

  const data = await res.json();
  return data;
};

export default getTeamMembersById;
