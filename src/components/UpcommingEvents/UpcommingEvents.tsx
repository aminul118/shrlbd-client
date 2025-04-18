/* eslint-disable @typescript-eslint/no-explicit-any */
import getUpcommingEvents from "@/lib/data/getUpcommingEvents";
import { MdEvent } from "react-icons/md";
import Image from "next/image";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";

const UpcommingEvents = async () => {
  const events = await getUpcommingEvents();

  if (!events || events.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center w-full min-h-[calc(100vh-351px)] text-3xl font-semibold gap-2">
        <MdEvent className="text-red-500 text-7xl" />
        No Upcoming Events Found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1  gap-8 px-4 py-8 max-w-2xl mx-auto">
      {events.map((event: any) => {
        const { heading, date, time, venue, facilitators, photo, _id } = event;

        return (
          <Card
            key={_id}
            className="w-full h-full flex flex-col overflow-hidden shadow-md dark:bg-slate-900 pt-0"
          >
            <div className="relative w-full h-[600px]">
              <Image
                src={photo}
                alt={heading}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>

            <CardHeader>
              <CardTitle className="text-xl font-bold">{heading}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2 text-sm">
              {facilitators && (
                <p>
                  <span className="font-semibold">Facilitator:</span>{" "}
                  {facilitators}
                </p>
              )}
              {date && (
                <p>
                  <span className="font-semibold">Date:</span> {date}
                </p>
              )}
              {time && (
                <p>
                  <span className="font-semibold">Time:</span> {time}
                </p>
              )}
              {venue && (
                <p>
                  <span className="font-semibold">Venue:</span> {venue}
                </p>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default UpcommingEvents;
