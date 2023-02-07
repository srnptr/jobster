import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../../assets/styled-wrappers/JobsContainer";
import { Job, PageBtnContainer } from "../../";
import { Loading } from "../../../layouts";
import { getAllJobs } from "../../../features/allJobs/allJobsSlice";

const JobsContainer = () => {
  const {
    isLoading,
    jobs,
    totalJobs,
    numOfPages,
    page,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch, page, search, searchStatus, searchType, sort]);
  
  if (isLoading) return <Loading center />;
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display.</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} Job{jobs.length > 1 && "s"} Found
      </h5>
      <div className="jobs">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
