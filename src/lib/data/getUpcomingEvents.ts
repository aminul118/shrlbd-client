import config from "@/config";

const getUpcomingEvents = async () => {
  const res = await fetch(`${config.baseUrl}/upcoming-event/get-all`);

  const data = await res.json();
  return data;
};

export default getUpcomingEvents;
