'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Container from '@/components/ui/Container';
import { useGetAllJobsQuery } from '@/redux/features/jobs/job.api';
import { IJob } from '@/types';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import JobSkeleton from './JobSkeleton';

type Job = {
  job: IJob;
  index: number;
};

const Jobs = () => {
  const { data, isLoading } = useGetAllJobsQuery({});
  const jobs = data?.data || [];

  return (
    <Container className="mx-auto px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-blue-800">
        Current Openings
      </h2>

      <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <JobSkeleton key={i} />)
          : jobs.map((job, i) => <JobCard key={job._id} job={job} index={i} />)}
      </div>
    </Container>
  );
};

const JobCard = ({ job, index }: Job) => {
  return (
    <motion.div
      key={job._id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: 'easeOut',
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex"
    >
      <Card className="flex h-full w-full cursor-pointer flex-col justify-between transition-all duration-300 hover:shadow-xl">
        <div>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-blue-900">
              {job.title}
            </CardTitle>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge variant="outline">{job.department}</Badge>
              <Badge variant="secondary">
                <MapPin /> {job.location}
              </Badge>
              <Badge>{job.jobTypeId.jobType}</Badge>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-primary mt-4 text-sm leading-relaxed">
              {job.short_description}
            </p>
          </CardContent>
        </div>

        <div className="px-4 pt-0">
          <Button asChild variant="default" className="w-full">
            <Link href={`/careers/${job.slug}`}> Details</Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default Jobs;
