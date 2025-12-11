import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IJob } from '@/types';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

const JobCard = ({
  title,
  department,
  location,
  slug,
  jobTypeId,
  short_description,
}: IJob) => {
  return (
    <div className="flex">
      <Card className="flex h-full w-full cursor-pointer flex-col justify-between transition-all duration-300 hover:shadow-xl">
        <div>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-blue-900">
              {title}
            </CardTitle>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge variant="outline">{department}</Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <MapPin className="h-4 w-4" /> {location}
              </Badge>
              <Badge>{jobTypeId.jobType}</Badge>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-primary mt-4 text-sm leading-relaxed">
              {short_description}
            </p>
          </CardContent>
        </div>

        <div className="px-4 pt-0 pb-4">
          <Button asChild variant="default" className="w-full">
            <Link href={`/careers/${slug}`}>Details</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default JobCard;
