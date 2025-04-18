const getUpcommingEvents = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/upcoming-events`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch upcomming events");
  }

  const data = await res.json();
  return data;
};

export default getUpcommingEvents;
