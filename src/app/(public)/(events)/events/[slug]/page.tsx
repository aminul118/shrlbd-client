import getEventsById from "@/lib/data/getEventsById";
import { IParams, TEvents } from "@/lib/types/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Metadata } from "next";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";

// ------> SEO Starts
export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const { slug } = await params;
  const event: TEvents = await getEventsById(slug);

  return generateMetaTags({
    title: event.heading,
    description: event.details?.slice(0, 160) || "Event at SHRLBD",
    keywords: `shrl event, recent event of shrl, shrl event on ${event.time}`,
    image: event.photo,
    url: `https://www.shrlbd.com/events/${slug}`,
  });
}
// ------> SEO TAG END

const EventDetailsPage = async ({ params }: IParams) => {
  const { slug } = await params;
  const event: TEvents = await getEventsById(slug);

  const { heading, date, time, venue, facilitators, photo, details } = event;

  return (
    <Container className="max-w-3xl">
      <SectionHeading title="Event Details" />
      <Card className="overflow-hidden shadow-md dark:bg-slate-900">
        <div className="relative w-full h-[400px]">
          <Image
            src={photo}
            alt={heading}
            fill
            className="object-cover"
            priority
          />
        </div>

        <CardHeader>
          <CardTitle className="text-2xl">{heading}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2 text-gray-700 dark:text-gray-300">
          {facilitators && (
            <p>
              <span className="font-semibold">Facilitator:</span> {facilitators}
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
          {details && (
            <p className="text-justify">
              <span className="font-semibold">Details:</span> {details}
            </p>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default EventDetailsPage;
