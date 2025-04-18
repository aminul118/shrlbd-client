const getAllEventsDone = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/events`);

  if (!res.ok) {
    throw new Error("Failed to fetch events");
  }

  const data = await res.json();
  return data;
};

export default getAllEventsDone;
