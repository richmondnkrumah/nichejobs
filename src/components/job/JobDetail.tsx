import React from 'react';
import { getRelativeTime } from '@/utils/relativeTimeConvert';
import { JOB } from '@/types/job';
import RenderHtml from './RenderHtml';
const JobDetail = ({ ActiveJob, isModal }: {ActiveJob?: JOB,isModal: boolean} ) => {
  if (!ActiveJob) return null;

  return (
    <div className={`ActiveJob-detail p-4 max-w-[900px] ${isModal && "hidden md:block"}`}>
      <h2 className="text-xl font-bold mb-2">{ActiveJob.role}</h2>
      <p className="mb-2">{ActiveJob.company_name}</p>
      <RenderHtml content={ActiveJob.text} />
      <p className="text-gray-500">Posted {getRelativeTime(ActiveJob.date_posted)}</p>
    </div>
  );
};

export default JobDetail;
