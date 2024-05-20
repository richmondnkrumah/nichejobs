import React from 'react'
import { JOB } from '@/types/job'
import Job from './Job'
type Props = {
  jobResults?: JOB[],
  activeJobHandler: (id: string) => void
}

const JobList = ({jobResults,activeJobHandler}: Props) => {
  console.log(JobList,"this is a jobResults")
  return (
    <section className='flex flex-col gap-5'>
      {jobResults && (
        jobResults?.map(job => <Job activeJobHandler={activeJobHandler} key={job.id} jobData={job} />)
      )}
    </section>
  )
}

export default JobList