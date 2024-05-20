import { JOB } from "@/types/job";
import React from "react";
import { getRelativeTime } from "@/utils/relativeTimeConvert";
type Props = {
  jobData: JOB;
  activeJobHandler: (id: string) => void

};

const Job = ({ jobData,activeJobHandler }: Props) => {
  return (
    <div onClick={() => activeJobHandler(jobData.id)} className="card cursor-pointer w-96 border border-opacity-[10%]  border-[var(--currentColor)] card-compact p-3">
      <div className="card-title  justify-between">
        <span>{jobData.role}</span>
        <div className="btn btn-ghost ">
          <svg
            viewBox="0 -0.5 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
      <div className="card-body ">
        <span>{jobData.company_name}</span>
        <span>{jobData.employment_type}</span>
        
      </div>
      <div className="flex justify-end">
        <p>Posted {getRelativeTime(jobData.date_posted)}</p>
      </div>
    </div>
  );
};

export default Job;
