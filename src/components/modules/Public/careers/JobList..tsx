import JobCard from '@/components/modules/Public/careers/JobCard';
import { getJobs } from '@/services/career/jobs';

const JobsList = async ({ params }: { params: Record<string, string> }) => {
  const { data: jobs } = await getJobs(params);

  if (!jobs?.length) {
    return <p className="py-32 text-center">No Job Found</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job._id} {...job} />
      ))}
    </div>
  );
};

export default JobsList;
