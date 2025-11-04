'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetAllJobsQuery } from '@/redux/features/jobs/job.api';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const { data, isLoading } = useGetAllJobsQuery({});
  const jobs = data?.data || [];
  console.log(jobs);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-blue-800">
        Current Openings
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => (
          <motion.div
            key={job._id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.3 }} //  Runs when 30% visible
            className="flex"
          >
            <Card
              className={`flex h-full w-full cursor-pointer flex-col justify-between transition-all duration-300 hover:shadow-xl`}
            >
              <div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-blue-900">
                    {job.title}
                  </CardTitle>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge variant="outline">{job.department}</Badge>
                    <Badge variant="secondary">{job.location}</Badge>
                    <Badge>{job.jobTypeId.jobType}</Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {job.short_description}
                  </p>
                </CardContent>
              </div>

              <div className="p-4 pt-0">
                <Button variant="default" className="w-full">
                  Details
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Jobs;
