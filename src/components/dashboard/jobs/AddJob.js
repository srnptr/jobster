import React, { useEffect } from "react";
import Wrapper from "../../../assets/styled-wrappers/DashboardFormPage";
import { FormRow, FormRowSelect } from "../../../layouts";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  handleJobChange,
  clearValues,
  createJob,
  editJob,
} from "../../../features/job/jobSlice";

const AddJob = () => {
  const {
    position,
    company,
    jobLocation,
    status,
    statusOptions,
    jobType,
    jobTypeOptions,
    isEditing,
    isLoading,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleJobChange({
          name: "jobLocation",
          value: user.location,
        })
      );
    }
  }, [user.location, dispatch, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields.");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, jobLocation, status, jobType },
        })
      );
      return;
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (e) => {
    dispatch(
      handleJobChange({
        name: e.target.name,
        value: e.target.value,
      })
    );
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Edit Job" : "Add Job"}</h3>
        <div className="form-center">
          <FormRow
            name="position"
            type="text"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            name="company"
            type="text"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            name="jobLocation"
            labelText={"job location"}
            type="text"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name="status"
            options={statusOptions}
            value={status}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            options={jobTypeOptions}
            value={jobType}
            handleChange={handleJobInput}
          />
          <div className="btn-container">
            <button
              className="btn btn-block clear-btn"
              type="button"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              className="btn btn-block submit-btn"
              type="submit"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
