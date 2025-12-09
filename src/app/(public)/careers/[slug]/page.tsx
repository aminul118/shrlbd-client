import DateFormat from '@/components/common/date-format';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import generateMetaTags from '@/seo/generateMetaTags';
import { getSingleJob } from '@/services/career/jobs';
import { IParams } from '@/types';
import { Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const CareerDetailsPage = async ({ params }: IParams) => {
  const { slug } = await params;
  const { data: job } = await getSingleJob(slug);

  if (!job) {
    notFound();
  }

  return (
    <Container className="mx-auto max-w-4xl px-6 py-16">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="mb-3 text-2xl font-bold text-blue-800">
            {job.title}
          </CardTitle>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{job.department}</Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> {job.location}
            </Badge>
            <Badge variant="default">Job ID: {job._id.slice(-6)}</Badge>
          </div>

          <p className="mt-3 flex items-center gap-1 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            Posted on: <DateFormat date={job.createdAt} />
          </p>
        </CardHeader>

        <CardContent className="mt-4 space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-blue-900">
              Short Description
            </h3>
            <p className="leading-relaxed text-gray-700">
              {job.short_description}
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-blue-900">
              Job Details
            </h3>
            {/* Render HTML safely */}
            <div
              className="prose prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: job.details }}
            />
          </div>

          <div className="pt-4">
            <Link
              href="/careers"
              className="inline-block text-blue-600 hover:underline"
            >
              ← Back to Career Listings
            </Link>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CareerDetailsPage;

// ---> SEO Starts
export async function generateMetadata({ params }: IParams) {
  const { slug } = await params;
  const { data: job } = await getSingleJob(slug);

  return generateMetaTags({
    title: `${job.title} | SHRL Career`,
    description:
      job.short_description?.replace(/<[^>]*>/g, '').slice(0, 160) || '',
    keywords: `${job.short_description}, Career`,
    image: '/seo/career.jpg',
    websitePath: `/careers/${slug}`,
  });
}
// ---> SEO END
