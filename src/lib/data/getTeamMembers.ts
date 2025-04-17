const getTeamMembers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/members`);

  if (!res.ok) {
    throw new Error("Failed to fetch team members");
  }

  const data = await res.json();
  return data;
};

export default getTeamMembers;
