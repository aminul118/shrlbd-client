const getUpcomingEvents = async () => {
  const res = await fetch(
    "https://server.shrlbd.com/api/v1/upcoming-event/get-all"
  );

  const data = await res.json();
  return data;
};

export default getUpcomingEvents;
