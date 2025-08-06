import getUpcomingEvents from "@/lib/data/getUpcomingEvents";

export interface IUpcomingEvent {
  _id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  photo: string;
  details: string;
}

const UpcomingEvents = async () => {
  const events = await getUpcomingEvents();
  console.log(events);

  return (
    <div className="grid grid-cols-1  gap-8 px-4 py-8 max-w-2xl mx-auto">
      {events?.data.map((event: IUpcomingEvent) => {
        console.log(event.title);
        return <div key={event._id}></div>;
      })}
    </div>
  );
};

export default UpcomingEvents;
