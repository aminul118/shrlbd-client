import getAllEventsDone from "@/lib/data/getAllEventsDone";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import SectionHeading from "@/components/ui/SectionHeading";
import { TEvents } from "@/lib/types/types";

const EventsPage = async () => {
  const events: TEvents[] = await getAllEventsDone();

  if (!events || events.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-2xl font-semibold text-gray-600">No events found.</p>
      </div>
    );
  }
  //   console.log(events);
  return (
    <div className="max-w-4xl mx-auto w-full mt-8 ">
      <SectionHeading title="Events" />
      <div className="grid gap-8">
        {events.map((event: TEvents) => (
          <Card key={event._id} className="shadow-lg " data-aos="fade-up">
            <div className="relative w-full h-[400px]">
              <Image
                src={event.photo}
                alt={event.heading}
                fill
                className="object-cover"
                priority
              />
            </div>

            <CardHeader>
              <CardTitle className="text-xl font-bold">
                {event.heading}
              </CardTitle>
            </CardHeader>

            <CardContent>{/* Add more details if needed */}</CardContent>

            <CardFooter className="flex justify-end">
              <Button asChild>
                <Link href={`/events/${event._id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
