'use client'
import JobDetail from "@/components/job/JobDetail";
import { useJobStore } from "@/context/jobContext";


const JobDetailPage = ({ params }: { params: { id: string } }) => {
  const searchJobId = params.id
  const { jobs } = useJobStore();
  const job = jobs?.find((job) => job.id === searchJobId);

  return (
    <div>
      {job ? 
      <JobDetail isModal={false} ActiveJob={job} /> :
      <p>JOB NOT FOUND </p> }
      <a href="/">GO BACK</a>
    </div>
  );
};

export default JobDetailPage;
