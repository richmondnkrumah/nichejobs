"use client";
import { ChangeEvent, useState, useEffect, useActionState } from "react";
import { searchFormHandler } from "@/utils/serverActions";
import { useJobStore } from "@/context/jobContext";
import Filters from "@/components/job/Filters";
import JobList from "@/components/job/JobList";

type Props = {};

const page = (props: Props) => {
  const [searchData, setSearchData] = useState({
    jobTitle: "",
    jobLocation: "",
  });
  const [state, formAction] = useActionState(searchFormHandler, {
    message: null,
    error: null,
  });
  const { setNewJobResults, jobs } = useJobStore();

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleKeyDownSubmission = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" || e.key === "NumpadEnter") {
      e.preventDefault();
      e.currentTarget.requestSubmit();
    }
  };
  useEffect(() => {
    if (!state.error) {
      setNewJobResults(state.message);
    }
  }, [state]);
  return (
    <main className="mx-2 h-full">
      <form
        className="flex justify-center w-full"
        action={formAction}
        onKeyDown={handleKeyDownSubmission}
      >
        <div className="flex flex-col border border-[var(--currentColor)] rounded-lg lg:border-0 lg:flex-row gap-1 p-1 w-[80%] lg:w-[60%] ">
          <label className="input focus-within:outline-none focus-within:border-0 lg:focus-within:border lg:input-bordered grow flex items-center gap-2 rounded-l-full  ">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M20.9992 21L14.9492 14.95"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={searchData.jobTitle}
              onChange={inputChangeHandler}
            />
          </label>
          <hr className="lg:hidden border-t-[var(--currentColor)]"></hr>
          <label className="input focus-within:outline-none focus-within:border-0 lg:focus-within:border  lg:input-bordered flex items-center grow gap-2 rounded-r-full">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <input
              type="text"
              name="jobLocation"
              placeholder="Location"
              value={searchData.jobLocation}
              onChange={inputChangeHandler}
            />
          </label>
        </div>
      </form>
      {jobs && <Filters />}
      <div>{state?.error}</div> 
    </main>
  );
};

export default page;
